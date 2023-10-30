import mongoose from "mongoose";
import EventFactory from "../../factories/event/EventFactory";
import UserFactory from "../../factories/user/UserFactory";

const businessEvents = async (businessId: string) => {
  if (!businessId) {
    return { status: "failure", details: "businessId cannot be empty" };
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const events = await EventFactory.instance.readByBusinessId(
      { businessId },
      session
    );

    if (events && events.length > 0) {
      const userIds = events.map((event) => event.userId);
      const users = await UserFactory.instance.readManyByUserIds(
        userIds,
        session
      );

      // Embed user information in each event object
      const eventsWithUsers = events.map((event) => {
        const user = users.find(
          (user) => user._id.toString() === event.userId.toString()
        );
        return {
          _id: event._id,
          startTime: event.startTime,
          userId: event.userId,
          businessId: event.businessId,
          user: user, // Embed user information in the event
        };
      });

      await session.commitTransaction();
      session.endSession();

      return { status: "success", events: eventsWithUsers };
    } else {
      await session.abortTransaction();
      session.endSession();
      return {
        status: "failure",
        details: "No events found for the given businessId",
      };
    }
  } catch (ex) {
    console.log(ex);
    console.log("Transaction aborted");
    await session.abortTransaction();
    session.endSession();
    return { status: "failure", details: ex };
  }
};

export default businessEvents;

import mongoose from "mongoose";
import EventFactory from "../../factories/event/EventFactory";
import BusinessFactory from "../../factories/business/BusinessFactory";
import business from "../business";

const search = async (userId: string, query: string) => {
  if (!userId) return { status: "failure", details: "access denied" };
  if (!query || query.length === 0) {
    return { status: "failure", details: "query cannot be empty" };
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  // Check if the query is "all" to return all events
  if (query.toLowerCase() === "all") {
    let events = await EventFactory.instance.readByUserId({ userId });

    if (events && events.length > 0) {
      const businessIds = events.map((event) => event.businessId);
      const businesses = await BusinessFactory.instance.readManyByBusinessIds(
        businessIds,
        session
      );

      // Embed user information in each event object
      const eventsWithUsers = events.map((event) => {
        const business = businesses.find(
          (business) => business._id.toString() === event.businessId.toString()
        );
        return {
          _id: event._id,
          startTime: event.startTime,
          userId: event.userId,
          businessId: event.businessId,
          business: business, // Embed user information in the event
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
  }

  // If the query is not "all," proceed with filtering as before
  var events = await EventFactory.instance.readByQuery({ query });

  // Filter events to only include those with the matching userId
  events = events.filter(
    (event) => event.userId.toString() === userId.toString()
  );

  if (events && events.length > 0) {
    const businessIds = events.map((event) => event.businessId);
    const businesses = await BusinessFactory.instance.readManyByBusinessIds(
      businessIds,
      session
    );

    // Embed user information in each event object
    const eventsWithUsers = events.map((event) => {
      const business = businesses.find(
        (business) => business._id.toString() === event.businessId.toString()
      );
      return {
        _id: event._id,
        startTime: event.startTime,
        userId: event.userId,
        businessId: event.businessId,
        business: business, // Embed user information in the event
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
};

export default search;

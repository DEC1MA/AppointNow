
import UserFactory from "../../factories/user/UserFactory";
import EventFactory from "../../factories/event/EventFactory";

const sync = async (userId: string) => {
    
    if (!userId) return { status: 'failure', details: 'access denied' }

    let user = await UserFactory.instance.read({ userId })
    let events = await EventFactory.instance.readByUserId({ userId })
    return { status: 'success', data: { user, events } }
}

export default sync;

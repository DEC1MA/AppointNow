
import mongoose, { connect } from 'mongoose'
import res from '../../resources/data.js'

import * as PendingWrapper from '../../models/secondary/pending/pending.schema';
import * as SessionWrapper from '../../models/secondary/session/session.schema';

import * as UserWrapper from '../../models/primary/user/user.schema';
import * as EventWrapper from '../../models/primary/event/event.schema';
import * as RoomWrapper from '../../models/primary/room/room.schema.js';
import * as BusinessWrapper from '../../models/primary/business/business.schema';
import * as AccessWrapper from '../../models/primary/access/access.schema';
import PendingFactory from './factories/pending/PendingFactory.js';
import SessionFactory from './factories/session/SessionFactory.js';
import UserFactory from './factories/user/UserFactory.js';
import EventFactory from './factories/event/EventFactory.js';
import BusinessFactory from './factories/business/BusinessFactory.js';

class Storage {
    private static async connectToDb() {
        await connect(res.json.config.addresses.MONGODB_URI);
        await mongoose.connection.db.dropDatabase()
    }
    private static prepareSchemas() {
        //secondary models
        PendingWrapper.prepare()
        SessionWrapper.prepare()
        // primary models
        UserWrapper.prepare();
        EventWrapper.prepare();
        RoomWrapper.prepare();
        BusinessWrapper.prepare();
        AccessWrapper.prepare();
    }
    private static prepareFactories() {
        //secondary models
        new PendingFactory()
        new SessionFactory()
        // primary models
        new UserFactory()
        new EventFactory()
        new BusinessFactory()
    }
    public static async initialize() {
        await this.connectToDb();
        this.prepareSchemas();
        this.prepareFactories()
    }
}

export default Storage;

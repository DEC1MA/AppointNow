import crypto from "crypto";

export default {
    makeUniqueId: () => {
        return crypto.randomBytes(16).toString("hex");
    }
}

import getClient, { type AtlasClient, type AtlasClientConfig } from "mongodb-atlas-api-client";

class Database {
    client: AtlasClient

    constructor(options: AtlasClientConfig) {
        this.client = getClient(options)
    }

    async addLinkSlug(link: String) {
        const r = await this.client.user.getAll({
            "envelope": true,
            "itemsPerPage": 10,
            "pretty": true
        });
    }

    async getLinkBySlug(slug: String) {

    }

    async slugExists(slug: String): Promise<Boolean> {
        return false;
    }
}

export const db = new Database({
    "publicKey": "some public key",
    "privateKey": "some private key",
    "baseUrl": "https://cloud.mongodb.com/api/atlas/v1.0",
    "projectId": "some project/group id"
});
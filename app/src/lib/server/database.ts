import { MongoClient, Collection } from "mongodb";

class Database {
    client: MongoClient
    links: Collection
    
    constructor(uri: string) {
        this.client = new MongoClient(uri)
        this.client.connect()
        this.links = this.client.db("UrlShortener").collection("links")
    }

    close() {
        this.client.close()
    }

    async addLinkSlug(link: string) {
        await this.links.insertOne({link})
    }

    async getLinkBySlug(slug: string) {
        return await this.links.findOne({slug})
    }

    async slugExists(slug: string): Promise<boolean> {
        return await this.links.findOne({slug}) != null;
    }

    async remSlug(slug: string) {
        return await this.links.findOneAndDelete({slug})
    }

}

export const db = new Database("mongodb+srv://pari:pari@cluster0.oigqapf.mongodb.net/?retryWrites=true&w=majority")
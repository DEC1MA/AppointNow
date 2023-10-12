declare class Storage {
    private static connectToDb;
    private static prepareSchemas;
    private static prepareFactories;
    static initialize(): Promise<void>;
}
export default Storage;

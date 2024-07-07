import process from 'process';

const conf = {
	appWriteUrl: String(process.env.REACT_APPWRITE_URL),
	appWriteProjectId: String(process.env.REACT_APPWRITE_PROJECT_ID),
	appWriteDatabaseId: String(process.env.REACT_APPWRITE_DATABASE),
	appWriteCollectionId: String(process.env.REACT_APPWRITE_COLLECTION),
	appWriteBucketId: String(process.env.REACT_APPWRITE_BUCKET),
}
export default conf
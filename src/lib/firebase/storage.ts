import app from '@/lib/firebase/config';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

// Get a reference to the storage service, which is used to create references in your storage bucket
// Investigate batch fetching of profile pictures
export async function getProfilePicture(path: string) {
    const storage = getStorage(app);
    const imgRef = ref(storage, path);
    return getDownloadURL(imgRef);
}
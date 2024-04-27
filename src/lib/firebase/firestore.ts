import { Profile } from '@/interfaces/profile';
import app from '@/lib/firebase/config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export async function getProfiles(): Promise<Profile[]> {
    const db = getFirestore(app)
    const profilesCollection = collection(db, 'testing');
    const query = await getDocs(profilesCollection);
    const profiles = [];
    query.forEach((doc) => {
        profiles.push(doc.data());
    });
    return profiles;
}

export async function getProfilesGroupedByTeam(): Promise<{ [team: string]: Profile[] }> {
    const db = getFirestore(app);
    const profilesCollection = collection(db, 'testing');
    const querySnapshot = await getDocs(profilesCollection);
    const teams: { [team: string]: Profile[] } = {};
    querySnapshot.forEach((doc) => {
        const profile = doc.data() as Profile;
        const { team } = profile;
        if (!teams[team]) {
            teams[team] = [];
        }
        teams[team].push(profile);
    });
    return teams;
}
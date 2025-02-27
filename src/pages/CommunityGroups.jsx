import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Link } from "react-router-dom";

const CommunityGroups = () => {
  const { user } = useAuth();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "communityGroups"));
        setGroups(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching community groups: ", error);
      }
    };

    fetchGroups();
  }, []);

  const joinGroup = async (groupId) => {
    if (!user) return alert("Please log in to join a group.");

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        joinedGroups: arrayUnion(groupId),
      });
      alert(`Joined ${groupId}!`);
    } catch (error) {
      console.error("Error joining group: ", error);
      alert("Failed to join the group. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Community Groups</h1>
      <ul className="space-y-3">
        {groups.map(group => (
          <li key={group.id} className="bg-white p-4 shadow-md rounded-md flex justify-between items-center">
            <span className="text-lg font-semibold">{group.name}</span>
            <div>
              <Link to={`/group/${group.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
                View
              </Link>
              <button onClick={() => joinGroup(group.id)} className="px-4 py-2 bg-green-500 text-white rounded-md">
                Join
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityGroups;
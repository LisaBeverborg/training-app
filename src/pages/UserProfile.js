import Signup from "../components/signup";
import { AuthProvider } from "../contexts/AuthContext"

function UserProfilePage() {
    return <div>
        <AuthProvider>
        <Signup/>
        </AuthProvider>
    </div>;
}

export default UserProfilePage;
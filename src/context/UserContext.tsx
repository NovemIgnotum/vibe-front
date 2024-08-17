import React, { createContext, useState, ReactNode, useContext} from "react";

interface UserContextType {
    name: string;
    setName: (name: string) => void;
    firstName: string;
    setFirstName: (firstName: string) => void;
    email: string;
    setEmail: (email: string) => void;
    profilePicture: string;
    setProfilePicture: (profilePicture: string) => void;
    pseudo: string;
    setPseudo: (pseudo: string) => void;
    backgroundPicture: string;
    setBackgroundPicture: (backgroundPicture: string) => void;
    playlists: string[];
    setPlaylists: (playlists: string[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [name, setName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [profilePicture, setProfilePicture] = useState<string>("");
    const [pseudo, setPseudo] = useState<string>("");
    const [backgroundPicture, setBackgroundPicture] = useState<string>("");
    const [playlists, setPlaylists] = useState<string[]>([]);

    return (
        <UserContext.Provider value={{ name, setName, firstName, setFirstName, email, setEmail, profilePicture, setProfilePicture, pseudo, setPseudo, backgroundPicture, setBackgroundPicture, playlists, setPlaylists }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within an UserProvider");
    }
    return context;
};

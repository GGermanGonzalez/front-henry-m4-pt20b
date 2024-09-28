
import React from "react";

interface AlertProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
    return (
        <div className={`mt-2 w-full p-2 border rounded-md text-white shadow-md ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-center text-sm">{message}</p>
            <button 
                className="mt-1 px-2 py-1 bg-green-400 text-white rounded hover:bg-gray-100 text-sm" 
                onClick={onClose}
            >
                Accept
            </button>
        </div>
    );
};

export default Alert;



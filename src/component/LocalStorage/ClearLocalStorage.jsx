

const ClearLocalStorage = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("age");

    localStorage.clear(); // This will clear all local storage items
    return <div>Local Storage Cleared</div>;
};

export default ClearLocalStorage;
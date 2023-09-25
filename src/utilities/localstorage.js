const getStoredDonations = () => {
    const storedDonations = localStorage.getItem("donations");
    if (storedDonations) {
        return JSON.parse(storedDonations);
    } else {
        return []
    }
}

const saveDonations = id => {
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donation => id === donation);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonations));
    }
}

export { getStoredDonations, saveDonations }
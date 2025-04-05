document.addEventListener("DOMContentLoaded", () => {
 
    const fetchInterests = async () => {
        try {
            const response = await fetch("./data/interests.json");
            const interests = await response.json();
            displayInterests(interests);
        } catch (error) {
            console.error("Error, unable to upload business interests:", error);
        }
    };
 
    const displayInterests = (intersts) => {
        const cardContainer = document.querySelector("#cards");
        if (!cardContainer) return;
 
        cardContainer.innerHTML = "";
 
        intersts.forEach(interest => {
            let interestCard = document.createElement("div");
            interestCard.classList.add("card");
 
            interestCard.innerHTML = `
            <h2>${interest.title}</h2>
                <figure>
                    <img src="${interest.image}" alt="${interest.title}"  height=200px class="interest-image">
                </figure>
                <address>
                    <p><strong>Address:</strong> ${interest.address}</p>
                </address>
                <p><strong>Description:</strong>${interest.description}</p>
                <button> Learn More </button>
                
            `;
 
            cardContainer.appendChild(interestCard);
        });
    };
 
 
    fetchInterests();
});

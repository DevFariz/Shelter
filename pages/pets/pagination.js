function shuffle(arr) {
    for(let i=0; i<arr.length; ++i) {
        let x = Math.trunc(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
    }
    return arr;
}


class Pages{

    constructor(div, btn){
        this.currentPage = 1;
        this.div = div;
        this.btn = btn;
    }

    setMaxPages(size){
        this.cardSize = size 
        this.maxPages = Math.floor(48 / size);
        if(this.currentPage > size){
            this.currentPage = size;
        }
    }

    prev(){
        if(this.currentPage > 1){
            --this.currentPage;
        }
        this.showCurrentPage();
    }
    next(){
        if(this.currentPage < this.maxPages){
            ++this.currentPage;
        }
        this.showCurrentPage();
    }
    toFirst(){
        this.currentPage = 1;
        this.showCurrentPage();
    }
    toLast(){
        this.currentPage = this.maxPages;
        this.showCurrentPage();
    }
    showCurrentPage(){
        this.div.innerHTML = "";
        const data = shuffle(pets).slice(0, this.cardSize);
        data.forEach(pet => {
            const x = new Card(pet.name, pet.img, this.div)
            x.clickItem(pet);
        })
        this.btn.innerText = this.currentPage;
    }
}

class Card{

    constructor(name, link, parent){
        this.cardContainer = document.createElement("div");
        this.cardContainer.classList.add("our-friends__item");
        const cardImg = document.createElement("img");
        cardImg.src = link;
        cardImg.alt = "pet";
        cardImg.classList.add("our-friends__img");
        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("our-friends__name");
        cardTitle.innerText = name;
        const cardLink = document.createElement("a");
        cardLink.href = "#";
        cardLink.classList.add("our-firnds__more");
        cardLink.innerText = "Learn more";
        this.cardContainer.append(cardImg);
        this.cardContainer.append(cardTitle);
        this.cardContainer.append(cardLink);
        parent.append(this.cardContainer);
    }

    clickItem(data){
        this.cardContainer.addEventListener('click', () => {
            let modal = new Modal(data, document.querySelector("body"));
            modal.showModal();
            modal.closeModal(document.querySelector(".modal__close"))
        })
    }
}

class Modal{
    constructor(pet, parent){
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        this.modal.innerHTML = `<div class="modal-container">
        <div class="modal__img">
            <img src="${pet.img}" alt="${pet.name}" class="modal__pic">
        </div>
        <div class="modal-content">
            <h3 class="modal__title">${pet.name}</h3>
            <h4 class="modal__subtitle"><span class="animal__type">${pet.type}</span> - <span class="animal__breed">${pet.breed}</span></h4>
            <p class="modal__text">${pet.description}</p>
            <ul class="modal-list">
                <li class="modal__item">
                    Age: <span class="modal__age">${pet.age}</span>
                </li>
                <li class="modal__item">
                    Inoculations: <span class="modal__inoculations">${pet.inoculations}</span>
                </li>
                <li class="modal__item">
                    Diseases: <span class="modal__diseases">${pet.diseases}</span>
                </li>
                <li class="modal__item">
                    Parasites: <span class="modal__parasites">${pet.parasites}</span>
                </li>
            </ul>
        </div>
        <button class="modal__close">
            <img src="../../assets/icons/close-btn.svg" alt="close">
        </button>
        </div>`
        parent.append(this.modal)
    }

    showModal(){
        this.modal.style.transform = "scale(100%)";
    }

    closeModal(close){
        close.addEventListener('click', () => {
            this.modal.style.transform = "scale(0)";
        })
    }
}

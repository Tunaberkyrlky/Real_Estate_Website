const listings = [
    {
      id: 1,
      title: "KÖY 1+1 Live and Work",
      description: "Köy projesinin en gözde etaplarından, yaşam alanları ile ofis ortamlarını beraber sunan Live and Work etabında modern tasarımlı balkonlu 1+1 daire.",
      price: 13000000,
      location: "İstanbul, Sarıyer/Zekeriyaköy",
      area: 70,
      room_count: "1+1",
      bathroom_count: 1,
      category: "Satılık",
      created_at: "2025-03-30T10:00:00Z",
      images: [
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1511.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1512.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1513.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1514.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1515.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1518.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1519.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_1520.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_4424.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_4427.jpeg",
        "portfolios/for-sale/KÖY 1+1 Live and Work/IMG_4430.jpeg"
      ]
    },
    {
      id: 2,
      title: "Garanti Koza",
      description: "Doğayla iç içe bir yaşam için doğru adres olan Zekeriyaköy'deki bu evin 905 m2 bahçe içerisinde; otomatik sulama sistemi, jeneratörü ve su kuyusu bulunmaktadır.",
      price: 44500000,
      location: "İstanbul, Sarıyer/Zekeriyaköy",
      area: 485,
      room_count: "6+2",
      bathroom_count: "4",
      category: "Satılık",
      created_at: "2025-03-29T12:00:00Z",
      images: [
       "portfolios/for-sale/Garanti Koza/IMG_0627.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0628.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0630.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0635.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0639.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0643.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0649.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0653.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0656.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_0662.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_1254.JPG",
       "portfolios/for-sale/Garanti Koza/IMG_1257.JPG"
      ]
    },
    {
      id: 3,
      title: "KÖY 3C 5+2 Villa",
      description: "Kapsamlı yaşam olanakları sunan müstakil villamız, KÖY sitesinin zengin sosyal olanakları ile kusursuz bir yaşam alanı sunuyor.",
      price: 52000000,
      location: "İstanbul, Sarıyer/Zekeriyaköy",
      area: 338,
      room_count: "5+2",
      bathroom_count: "4",
      category: "Satılık",
      created_at: "2025-03-28T09:30:00Z",
      images: [
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2896.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2897.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2898.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2899.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2900.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2901.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2908.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2913.jpg",
        "portfolios/for-sale/KÖY 3- C VİLLA 5+2/IM/I2928.jpg"
    ]
    },
    {
      id: 4,
      title: "KÖY Bahçe Dubleks",
      description: "Kapsamlı yaşam olanakları sunan müstakil villamız, KÖY sitesinin zengin sosyal olanakları ile kusursuz bir yaşam alanı sunuyor.",
      price: 52000000,
      location: "İstanbul, Sarıyer/Zekeriyaköy",
      area: 338,
      room_count: "5+2",
      bathroom_count: "4",
      category: "Satılık",
      created_at: "2025-03-28T09:30:00Z",
      images: [
        "portfolios/for-sale/Köy 3+1 Bahçe Dubleks/DJI_20221229_164446_419.jpg",
        "portfolios/for-sale/Köy 3+1 Bahçe Dubleks/DJI_20221229_164511_169.jpg",
        "portfolios/for-sale/Köy 3+1 Bahçe Dubleks/DJI_20221229_164524_458.jpg",
        
    ]
    }
  ];





  // Select the parent container
let contentContainer = document.querySelector(".content-container");

// Create a new content-item-card
function createContentItemCard(listing) {
  // Create the card container
  let card = document.createElement("div");
  card.className = "content-item-card card d-flex flex-row";

  // Create the left-side (carousel-container)
  let leftSide = document.createElement("div");
  leftSide.className = "left-side me-1";

  let carouselContainer = document.createElement("div");
  carouselContainer.className = "carousel-container";

  let carousel = document.createElement("div");
  carousel.id = `listingCarousel${listing.id}`;
  carousel.className = "carousel slide";
  carousel.setAttribute("data-bs-ride", "carousel");

  let carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";

  // Add images to the carousel
  listing.images.forEach((image, index) => {
    let carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

    let img = document.createElement("img");
    img.src = image;
    img.className = "d-block w-100";
    img.alt = "İlan Görseli";

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  // Add carousel controls
  let prevButton = document.createElement("button");
  prevButton.className = "carousel-control-prev";
  prevButton.type = "button";
  prevButton.setAttribute("data-bs-target", `#listingCarousel${listing.id}`);
  prevButton.setAttribute("data-bs-slide", "prev");
  prevButton.innerHTML = `
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Önceki</span>
  `;

  let nextButton = document.createElement("button");
  nextButton.className = "carousel-control-next";
  nextButton.type = "button";
  nextButton.setAttribute("data-bs-target", `#listingCarousel${listing.id}`);
  nextButton.setAttribute("data-bs-slide", "next");
  nextButton.innerHTML = `
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Sonraki</span>
  `;

  // Append carousel elements
  carousel.appendChild(carouselInner);
  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);
  carouselContainer.appendChild(carousel);
  leftSide.appendChild(carouselContainer);

  // Create the right-side (details)
  let rightSide = document.createElement("div");
  rightSide.className = "right-side";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  cardBody.innerHTML = `
    <h5 class="card-title">${listing.title}</h5>
    <p class="card-text"><small class="text-muted">Fiyat: ${listing.price.toLocaleString()} TL</small></p>
    <p class="card-text"><small class="text-muted">Lokasyon: ${listing.location}</small></p>
    <p class="card-text"><small class="text-muted">Metrekare: ${listing.area} m² - Oda sayısı: ${listing.room_count}</small></p>
    <p class="card-text"><small class="text-muted">İlan Tarihi: ${new Date(listing.created_at).toLocaleDateString()}</small></p>
  `;

  rightSide.appendChild(cardBody);

  // Append left-side and right-side to the card
  card.appendChild(leftSide);
  card.appendChild(rightSide);

  return card;
}

console.log("hello world")

for (let i = 0; i < listings.length; i++) {
    let newCard = createContentItemCard(listings[i]);
    contentContainer.appendChild(newCard);
}

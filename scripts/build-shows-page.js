const API_KEY = "8fd3018e-f075-45f1-b31a-024ab1909a89";   
const bandSiteApi = new BandSiteApi(API_KEY);

const showlistTable = document.querySelector(".shows__list");

async function renderShowList() {
    try {
        const showTable = await bandSiteApi.getShows();
            // this is for the mobile format of each item getting a label
            showTable.forEach((newShowParam) => {

                const mobileShowCard = document.createElement('li');
                mobileShowCard.classList.add("shows__item");

                const dateBox = document.createElement('div');
                dateBox.classList.add("shows__content-group");

                const venueBox = document.createElement('div');
                venueBox.classList.add("shows__content-group");

                const locationBox = document.createElement('div');
                locationBox.classList.add("shows__content-group");

                const buttonBox = document.createElement('div');
                buttonBox.classList.add("button");
                buttonBox.innerText = "BUY TICKETS";

                const datelabel = document.createElement('h3');
                dateLabel.classList.add("headerLabel", "headerLabel-mobile");
                dateLabel.innerText = "DATES";

                const venuelabel = document.createElement('h3');
                venueLabel.classList.add("headerLabel", "headerLabel-mobile");
                venueLabel.innerText = "VENUE";

                const locationlabel = document.createElement('h3');
                locationLabel.classList.add("headerLabel", "headerLabel-mobile");
                locationLabel.innerText = "LOCATION";

                const dateData = document.createElement('p');
                dateData.classList.add("shows__date");
                dateData.innerText = convertDate(newShowParam.date);

                const venueData = document.createElement('p');
                venueData.classList.add("shows__venue");
                venueData.innerText = convertDate(newShowParam.date);

                const locationData = document.createElement('p');
                locationData.classList.add("shows__location");
                locationData.innerText = convertDate(newShowParam.date);








                showlistTable.appendChild(mobileShowCard);
                mobileShowCard.appendChild(dateBox);
                mobileShowCard.appendChild(venueBox);
                mobileShowCard.appendChild(locationBox);
                mobileShowCard.appendChild(buttonBox);

                dateBox.appendChild(dateLabel);
                dateBox.appendChild(dateData);

                venueBox.appendChild(venueLabel);
                venueBox.appendChild(venueData);

                locationBox.appendChild(locationLabel);
                locationBox.appendChild(locationData);

            });

            item.addEventListener('click', () => {
                document.querySelectorAll('.shows__item').forEach(showItem => {
                showItem.classList.remove('shows__item--selected');
            });
            item.classList.add('shows__item--selected');
        });
        
        return item;

    } catch (error) {
        console.error(error);
    }}

        renderShowList();

        function convertDate(datestamp) {
            let gigDate = new Date(datestamp);
            let style = {weekday: "short", month: "short", day: "2-digit", year: "numeric" };
            let formattedDate = gigDate.toLocaleDateString("en-US", format).split(",").join("");

            return formattedDate;
        }



        // ===============================================================================================================================================================


// search for the box for the entire show list table



// tablet headers (one row)
const showsHeader = document.createElement('div');
showsHeader.classList.add('shows__table-header');


const dateLabel = document.createElement('h3');
dateLabel.classList.add("headerLabel", "headerLabel--tablet");
dateLabel.innerText = "DATE";

const venueLabel = document.createElement('h3');
venueLabel.classList.add("headerLabel", "headerLabel--tablet");
venueLabel.innerText = "VENUE";

const locationLabel = document.createElement('h3');
locationLabel.classList.add("headerLabel", "headerLabel--tablet");
locationLabel.innerText = "LOCATION";

// This is the button header for the buy Tickets column which doesnt have any header title but we need something to occupy its space in the meantime
const blankBtnHeader = document.createElement('div');
blankBtnHeader.classList.add("headerLabel", "headerLabel--tablet");




blankBtnHeader.appendChild(showsHeader);
locationLabel.appendChild(showsHeader);
venueLabel.appendChild(showsHeader);
dateLabel.appendChild(showsHeader);
showsHeader.appendChild(showlistTable);







// ===============================================================================================================================================================

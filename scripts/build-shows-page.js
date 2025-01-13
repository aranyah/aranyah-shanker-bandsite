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
                locationData.classList.add("shows__date");
                locationData.innerText = convertDate(newShowParam.date);








                showlistTable.appendChild()





                    group.className = 'shows__content-group';

                    const label = document.createElement('div');
                    label.className = 'shows__label-secondary';
                    label.textContent = field.label;

                    const value = document.createElement('div');
                    value.className = `shows__${field.class}`;
                    value.textContent = field.value;

                    group.appendChild(label);
                    group.appendChild(value);
                    item.appendChild(group);
            }
        
        
        
        
        
        )



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

// const showsSection = document.createElement('section');
// showsSection.className = 'shows';


const showsList = document.createElement('div');
showsList.className = 'shows__list';

const headerLabels = document.createElement('div');
headerLabels.className = 'shows__item shows__item--header';
['DATE', 'VENUE', 'LOCATION'].forEach(label => {
    
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'shows__label-primary';
    labelDiv.textContent = label;


// document.addEventListener('DOMContentLoaded', () => {
//   const heroPlayer = document.querySelector('.hero__player');

//   const soundcloudEmbed = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
// src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252516215&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 0.625rem; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/queen-69312" title="Queen" target="_blank" style="color: #cccccc; text-decoration: none;">Queen</a> · <a href="https://soundcloud.com/queen-69312/dont-stop-me-now-remastered" title="Don&#x27;t Stop Me Now (Remastered 2011)" target="_blank" style="color: #cccccc; text-decoration: none;">Don&#x27;t Stop Me Now (Remastered 2011)</a></div>`;
//   heroPlayer.innerHTML = soundcloudEmbed;











//   const showsData = [
//       {
//           date: 'Mon Sept 09 2024',
//           venue: 'Ronald Lane',
//           location: 'San Francisco, CA'
//       },
//       {
//           date: 'Tue Sept 17 2024',
//           venue: 'Pier 3 East',
//           location: 'San Francisco, CA'
//       },
//       {
//           date: 'Sat Oct 12 2024',
//           venue: 'View Lounge',
//           location: 'San Francisco, CA'
//       },
//       {
//           date: 'Sat Nov 16 2024',
//           venue: 'Hyatt Agency',
//           location: 'San Francisco, CA'
//       },
//       {
//           date: 'Fri Nov 29 2024',
//           venue: 'Moscow Center',
//           location: 'San Francisco, CA'
//       },
//       {
//           date: 'Wed Dec 18 2024',
//           venue: 'Press Club',
//           location: 'San Francisco, CA'
//       }
//   ];

  const createShowsSection = () => {
     
          headerLabels.appendChild(labelDiv);
      });
      showsList.appendChild(headerLabels);

      showsData.forEach(show => {
          const showItem = createShowItem(show);
          showsList.appendChild(showItem);
      });

      
  };

  const createShowItem = (show) => {
      const item = document.createElement('div');
      item.className = 'shows__item';

      const fields = [
          { label: 'DATE', value: show.date, class: 'date' },
          { label: 'VENUE', value: show.venue, class: 'venue-location' },
          { label: 'LOCATION', value: show.location, class: 'venue-location' }
      ];

      fields.forEach(field => {
          
      });

      const button = document.createElement('button');
      button.className = 'shows__tickets-btn';
      button.textContent = 'BUY TICKETS';
      item.appendChild(button);

      item.addEventListener('click', () => {
          document.querySelectorAll('.shows__item').forEach(showItem => {
              showItem.classList.remove('shows__item--selected');
          });
          item.classList.add('shows__item--selected');
      });

      return item;
  };

  createShowsSection();
});
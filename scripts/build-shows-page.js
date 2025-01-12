const API_KEY = "8fd3018e-f075-45f1-b31a-024ab1909a89";   
const bandSiteApi = new BandSiteApi(API_KEY);



const showlistElement = document.querySelector(".shows__list");
// const main = document.querySelector('.main');





const showsSection = document.createElement('section');
showsSection.className = 'shows';

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

// Use this as reference from index-js
// const listElement = document.createElement("li");
// listElement.classList.add("conversation__entry");


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

//   const soundcloudEmbed = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252516215&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 0.625rem; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/queen-69312" title="Queen" target="_blank" style="color: #cccccc; text-decoration: none;">Queen</a> · <a href="https://soundcloud.com/queen-69312/dont-stop-me-now-remastered" title="Don&#x27;t Stop Me Now (Remastered 2011)" target="_blank" style="color: #cccccc; text-decoration: none;">Don&#x27;t Stop Me Now (Remastered 2011)</a></div>`;
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

      showsSection.appendChild(header);
      showsSection.appendChild(showsList);
      main.appendChild(showsSection);
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
          const group = document.createElement('div');
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
# Game of Thrones Character App

## Description:

This was a partnered hack-a-thon style project, focusing on React.js and integrating public APIs. The main goal was to create an interactive web application which allows users to explore characters from the "Game of Thrones" series, view detailed information about each character, and even assemble a team to "defeat the White Walkers". The application showcases my skills in React, API integration, and responsive design.

## Link to App:

https://majestic-pegasus-01f742.netlify.app/

## Install Instructions:

1. Clone repository
2. Navigate to the project directory
3. Run `npm i`
4. Run `npm run dev` - This should then open a localhost page in your browser

## Timeframe & Working Team:

This project was developed under an intense timeframe of less than 48 hours, in partnership with Florent Giovannone. Our approach to teamwork was dynamic and collaborative; we conducted regular meetings every one to two hours to discuss our progress, challenges, and next steps. Each meeting concluded with a clear set of deliverables for each of us to focus on before reconvening. This method ensured continuous communication and integration of our work, allowing us to efficiently divide and conquer the project tasks. We utilized Git for version control, pushing our individual contributions to the shared repository and merging them regularly to keep our project in sync.

## Technologies Used:

- **Front End:** React.js for building the user interface, React Router for navigation.
- **Styling:** Bulma for the CSS framework, with some custom SCSS for additional styling.
- **API:** public Game of Thrones API for fetching character data.
- **Development tools:** Git for version control and GitHub for the repository.

## Brief:

The objective of this project was to solidify our understanding of React.js and API integration by creating a web application, reflecting the skills learned in the preceding week. The challenge was to demonstrate effective use of React's components and state management alongside fetching and displaying data from an external API.

## Planning:

![Wireframing](./src/assets/images/Screenshot%202024-03-06%20at%2015.34.20.png)

- **Wireframing/Sketches:** We created initial sketches to outline the layouts for our MVP, ensuring a clear visual direction from the start.

- **Pseudo code:** Referencing the image provided, we drafted foundational pseudo code to structure our approach and facilitate task allocation.

- **Task Allocation:** Florent and I aimed for an industry-standard approach, adopting short sprints to distribute tasks while ensuring regular check-ins to balance the workload efficiently. We did also on occassion opt for a pilot and co-pilot strategy.

### Characters

![Characters](./src/assets/images/Screenshot%202024-03-11%20190218.png)

### To Battle

![To Battle](./src/assets/images/Screenshot%202024-03-11%20190522.png)

### Sign In

![Sign in](./src/assets/images/Screenshot%202024-03-11%20190700.png)

### Character

![Character Info](./src/assets/images/Screenshot%202024-03-11%20191536.png)

## File Structure:

```plaintext
src
├── assets
│ └── images
├── components
│ ├── characterCard.tsx
│ ├── characterCardModal.tsx
│ ├── characters.tsx
│ ├── footer.tsx
│ ├── home.tsx
│ ├── nav.tsx
│ ├── pickTeam.tsx
│ └── sign-in.tsx
├── styles
│ └── main.scss
├── App.tsx
├── index.d.ts
├── main.tsx
└── README.MD
```

## Build/Code Process:

### CharacterModal Component

```jsx
function CharacterModal({ character, onClose }) {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <p className="title">{character.fullName}</p>
        <figure className="image">
          <img src={character.image} alt={character.fullName} />
        </figure>
        <p>{character.description}</p>
      </div>
      <button className="modal-close is-large" onClick={onClose}></button>
    </div>
  );
}
```

### Characters Component (with API Integration and State Management)

```jsx
function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://thronesapi.com/api/v2/Characters');
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="characters-container">
      {isLoading ? (
        <p>Loading characters...</p>
      ) : (
        characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            fullName={character.fullName}
            image={character.imageUrl}
          />
        ))
      )}
    </div>
  );
}
```

Florent and I initiated the project by setting up the React framework and structuring the components. Highlights of our collaboration include:

- CharacterCard: A component for displaying character cards.
- CharacterModal: A modal component for detailed character information.
- Characters: The main component allowing users to search and view characters.
- API Integration: Utilized `fetch` to retrieve character data from ThronesAPI.
- State Management: Employed React hooks (`useState`, `useEffect`) for efficient data management and fetching.

We were particularly proud of the CharacterModal component. It dynamically updates based on user selection, demonstrating our understanding of React's state management and prop handling.


## Challenges
- Integrating the modal proved challenging, particularly because it was a feature we decided to add later in the development process. This decision introduced unexpected complexity into our project.
- During the initial stages, we encountered issues with our code not behaving as expected due to typos, including a particularly elusive error where we failed to pluralize a word. This seemingly small oversight led to significant debugging efforts, highlighting the importance of meticulous attention to detail.

## Wins
- A working React app implementing everything we had learnt in the preceding week.
- Integrating the API and crafting a dynamic, responsive UI were a major success. 

## Key Learnings/Takeaways
- Deepened my understanding of React and what it is capable of even in a short time.
- further understood the value of responsive design and adopting a mobile-first approach.


## Bugs
- The Modal only closes when the image itself is clicked rather then the outside. Given this was a late addition I didn't have enough time before deployment to look into why it was behaving this way.
- When smaller resolutions view the App the Nav bar disappears. This is something I would have corrected given more time by implementing a hamburger button.

## Future Improvements
- I would have liked more time to work on the responsiveness of the app for different resolutions.
- We did discuss implementing a quiz but did not have enough time to really give it our best.
- I would have liked to implement some game logic for the 'To Battle' page.
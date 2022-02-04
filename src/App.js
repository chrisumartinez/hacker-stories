import react from "react";
import "./App.css";

const List = ({ list }) => {
	const Item = ({ item }) => {
		return (
			<div>
				<span>
					<a href={item.url}>{item.title}</a>
				</span>
				<span>{item.author}</span>
				<span>{item.num_comments}</span>
				<span>{item.points}</span>
			</div>
		);
	};

	return list.map((item) => {
		return <Item key={item.objectID} item={item} />;
	});
};

const Search = ({ search, onSearch }) => {
	return (
		<>
			<label htmlFor="search">Search: </label>
			<input id="search" type="text" value={search} onChange={onSearch} />
		</>
	);
};

const App = () => {
	const [searchTerm, setSearchTerm] = react.useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const stories = [
		{
			title: "React",
			url: "https://reactjs.org/",
			author: "Jordan Walke",
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: "Redux",
			url: "https://redux.js.org/",
			author: "Dan Abramov, Andrew Clark",
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];

	const searchedStories = stories.filter((story) => {
		return story.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<div>
			<h1>My Hacker Stories</h1>
			<Search onSearch={handleSearch} />
			<hr />
			{/* Render List Below */}
			<List list={searchedStories} />
		</div>
	);
};

export default App;

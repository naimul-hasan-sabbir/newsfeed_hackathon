import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './App.css';

function App() {
	return (
		<div className="App" variant="dark">
			<Navbar bg="light-blue" variant="dark" className="mr-sm2">
				<Navbar.Brand>NewsFeed</Navbar.Brand>
				<Button variant="light">Create Post</Button>
				<Button variant="dark">Login</Button>
			</Navbar>
			<Card border="dark" style={{ width: '40rem', margin: 'auto' }}>
				<Card.Header>UserX's Post</Card.Header>
				<Card.Body>
					<Card.Title>Post Caption</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card border="dark" style={{ width: '40rem', margin: 'auto' }}>
				<Card.Header>UserX's Post</Card.Header>
				<Card.Body>
					<Card.Title>Post Caption</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card border="dark" style={{ width: '40rem', margin: 'auto' }}>
				<Card.Header>UserX's Post</Card.Header>
				<Card.Body>
					<Card.Title>Post Caption</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default App;

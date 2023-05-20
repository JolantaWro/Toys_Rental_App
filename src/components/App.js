import "../App.css";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

function App() {
	return (
		<Layout>
			<Header>
				<div>Logo</div>
				<div>Menu</div>
				<div>Logowanie/Rejestracja</div>
			</Header>
			<Content>
				<div>Start</div>
				<div>O co chodzi</div>
				<div>O nas</div>
				<div>Przekaż zabawki</div>
				<div>Wypożyczalnia</div>
				<div>Kontakt</div>
				<div>FAQ</div>
			</Content>
			<Footer>
				<div>Copyright</div>
			</Footer>
		</Layout>
	);
}

export default App;

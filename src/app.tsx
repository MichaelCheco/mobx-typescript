import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import MobxReactDevtools from 'mobx-react-devtools';
import { appState } from './appState';

@observer
class Application extends React.Component {
	render() {
		return (
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						appState.addCurrentItem();
					}}>
					<input
						type="text"
						value={appState.currentItem}
						onChange={e => appState.changeCurrentItem(e.target.value)}
					/>
					<button type="submit">Add</button>
					<button type="button" onClick={() => appState.reset()}>
						Reset
					</button>
				</form>
				<ul>
					{appState.items.map((item, i) => {
						return <li key={i}>{item}</li>;
					})}
				</ul>
			</div>
		);
	}
}

// class HelloData {
// 	@observable clickedCount = 0;

// 	@action
// 	increment() {
// 		this.clickedCount++;
// 	}
// 	@computed
// 	get hasBeenClicked() {
// 		return this.clickedCount > 0;
// 	}
// }

// @observer
// class Hello extends React.Component<{}> {
// 	data = new HelloData();
// 	render() {
// 		return (
// 			<>
// 				<button onClick={() => this.data.increment()}>
// 					Click count = {this.data.clickedCount}
// 				</button>
// 				{this.data.hasBeenClicked && <div>You have clicked the button</div>}
// 			</>
// 		);
// 	}
// }

ReactDOM.render(<Application />, document.getElementById('root'));

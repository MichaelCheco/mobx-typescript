import { observable, action } from 'mobx';

/**
 * Features
 * - Store a list of items (string)
 * - Allow maintaining a current string as it gets typed
 * - Ability to add the current string to list of items
 * - Add an option to rest the items and the current string
 */

class ApplicationState {
	@observable
	items: string[] = [];

	@observable
	currentItem = '';

	@action
	changeCurrentItem(newValue: string) {
		this.currentItem = newValue;
	}
	@action
	addCurrentItem() {
		this.items.push(this.currentItem);
		this.currentItem = '';
	}
	@action
	reset() {
		this.currentItem = '';
		this.items = [];
	}
}

export const appState = new ApplicationState();

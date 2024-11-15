import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Raphael Stief',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Pipelines',
			'GitHub Actions',
			'Build/Test/Deploy steps',
			'DevOps'
		],
		// Which CI/CD tools do you use in your project?
		tools: [
			'Jenkins',
			'SonarQube'
			],
		// What do you want to learn in this workshop? 
		expectations: [
			'How to actually use Jenkins',
			'Learn more about the theory behind CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'video games',
			'running',
			'music & concerts',
			'doing my taxes?'
		]
	}
});

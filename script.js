

	function validate(checkbox){
		event.preventDefault();

		submitNameValidation();
		submitPhoneValidation();
		submitEmail1Validation();
		submitEmail2Validation();
		submitAddressValidation();
		submitCityValidation();
		submitCountryValidation();

		radioValidation();
		checkBoxes(checkbox);

		submitPortfolioValidation();
	}

	function submitNameValidation(){
		const messageName = document.getElementById('message-name');
		const input = document.getElementById('full-name');
		const validName = /^[A-Za-z]{3,20}\s[A-Za-z]{3,20}$/;
		if (input && validName.test(input.value)){
			return true;
		} else {
			messageName.innerHTML = 'Please write your full name!';
		}
	}
	function submitPhoneValidation(){
		const messagePhone = document.getElementById('message-phone');
		const input = document.getElementById('phone');
		const validPone = /^([++|00])+([\s|\d])+([\d]{8,})$/;
		if (input && validPone.test(input.value)){
			return true;
		} else {
			messagePhone.innerHTML = 'Please write a correct phone number!';
		}
	}
	function submitEmail1Validation(){
		const messageEmail1 = document.getElementById('message-email1');
		const input = document.getElementById('email1');
		const validEmail1 = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
		if (input && validEmail1.test(input.value)){
			return true;
		} else {
			messageEmail1.innerHTML = 'Please write a correct email!';
		}
	}
	function submitEmail2Validation(){
		const messageEmail2 = document.getElementById('message-email2');
		const input = document.getElementById('email2');
		const validEmail2 = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
		if (input && validEmail2.test(input.value)){
			return true;
		} else {
			messageEmail2.innerHTML = 'Please write a correct email!';
		}
	}
	function submitAddressValidation(){
		const messageAddress = document.getElementById('message-address');
		const input = document.getElementById('address');
		const validAddress = /\w{3,}/;
		if (input && validAddress.test(input.value)){
			return true;
		} else {
			messageAddress.innerHTML = 'Please write an address!';
		}
	}
	function submitCityValidation(){
		const messageCity = document.getElementById('message-city');
		const input = document.getElementById('city');
		const validCity = /\w{3,}/;
		if (input && validCity.test(input.value)){
			return true;
		} else {
			messageCity.innerHTML = 'Please write a city name!';
		}
	}
	function submitCountryValidation(){
		const messageCountry = document.getElementById('message-country');
		const input = document.getElementById('country');
		const validCountry = /\w{3,}/;
		if (input && validCountry.test(input.value)){
			return true;
		} else {
			messageCountry.innerHTML = 'Please write a country name!';
		}
	}
	function submitPortfolioValidation(){
		const messagePortfolio = document.getElementById('message-portfolio');
		const input = document.getElementById('portfolio');
		const validPortfolio = /https?:\/\/.+/;
		if (input && validPortfolio.test(input.value)){
			return true;
		} else {
			messagePortfolio.innerHTML = 'Please write a correct link!';
		}
	}


	const name = document.querySelector('.name');
	name.addEventListener('input', nameValidation);
	function nameValidation(e) {
		const validName = /^[A-Za-z]{3,20}\s[A-Za-z]{3,20}$/;
		const input = e.target.value;
		if (input && validName.test(input)) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
	};


	const phone = document.querySelector('.phone');
	phone.addEventListener('input', phoneValidation);
	function phoneValidation(e){
		const input = e.target.value;
		const validNumber = /^([++|00])+([\s|\d])+([\d]{8,})$/;
			if (input && validNumber.test(input)) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
		}
	
	
	const emailOne = document.querySelector('input[name="email"]');
	let value = '';
		emailOne.addEventListener('input', e => {
			value = e.target.value;
			const validEmail = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
			if (validEmail.test(value)) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
		});

	const emailTwo = document.querySelector('input[name="email-bis"]');
		emailTwo.addEventListener('input', e => {
			if (value === e.target.value) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
		});

	
	const address = document.querySelector('.address');
	address.addEventListener('input', addressValidation);
	
	function addressValidation(e) {
		const input = e.target.value;
		const validAddress = /\w{3,}/;
		if (input && validAddress.test(input)) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
	};



	const city = document.querySelector('.city');
	city.addEventListener('input', cityValidation);

	function cityValidation(e) {
		const input = e.target.value;
		const validCity = /\w{3,}/;
		if (input && validCity.test(input)) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
	};


	const country = document.querySelector('.country');
	country.addEventListener('input', countryValidation);

	function countryValidation(e) {
		const input = e.target.value;
		const validCountry = /\w{3,}/;
		if (input && validCountry.test(input)) {
				e.target.classList.remove('invalid');
			} else {
				e.target.classList.add('invalid');
			}
	};
	
	let count = 0;
	let countCheck = 0;

	function radioValidation() {
		const radio = document.getElementsByName('discipline');
		for (let i = 0; i < radio.length; i++){
			if (radio[i].checked){
				return true;
			} 
		}
		alert('No button checked');
		return false;
	}

	function checkBoxes(){
		const checkItem = document.getElementsByName('option');
		for(i = 0; i < checkItem.length; i++){
			if(checkItem[i].checked){
				return true;
			}
		}
		alert('Hey! Select a city!');
		return false;
	}


	const validatePortfolioLink = document.querySelector('.portfolioLink');
	validatePortfolioLink.addEventListener('input', linkValidation);

	function linkValidation (e){
		const input = e.target.value;
		const validLink = /https?:\/\/.+/;
		if (input && validLink.test(input)) {
			e.target.classList.remove('invalid');
		} else {
			e.target.classList.add('invalid');
		}

	}
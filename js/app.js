; (function(){
	window.addEventListener("load", pageLoaded);

	var planCore = document.getElementById("plan_core");
	var planPremium = document.getElementById("plan_premium");
	var planEnterprise = document.getElementById("plan_enterprise");

	var contactButton = document.getElementById("contact_button");


	function coreSelected(){
		planPremium.classList.remove("plan_item_selected");
		planEnterprise.classList.remove("plan_item_selected");
		planCore.classList.add("plan_item_selected");
	}

	function premiumSelected(){
		planCore.classList.remove("plan_item_selected");
		planEnterprise.classList.remove("plan_item_selected");
		planPremium.classList.add("plan_item_selected");
	}

	function enterpriseSelected(){
		planCore.classList.remove("plan_item_selected");
		planPremium.classList.remove("plan_item_selected");
		planEnterprise.classList.add("plan_item_selected");
	}

	function sendForm(){
		alert('Formulario enviado. Muchas gracias!');
	}

	function pageLoaded(){
		planCore.addEventListener("click", coreSelected);
		planPremium.addEventListener("click", premiumSelected);
		planEnterprise.addEventListener("click", enterpriseSelected);

		contactButton.addEventListener("click", sendForm);
	}

})();
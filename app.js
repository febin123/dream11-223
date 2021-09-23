/*start of marquee */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
/*end of marquee */
/*start of faq */
$(function() {

	"use strict";

	$(".section-faq .questions .active .answer").slideDown();

	$(".section-faq .questions .single-question > div").on("click", function() {
		$(".section-faq .questions .single-question .answer").slideUp();
		if($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
		}
		else {
			$(".section-faq .questions .single-question").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next(".answer").slideDown();
		}
	});

});
/*end of faq */
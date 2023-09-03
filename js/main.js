// https://www.themealdb.com/api/json/v1/1/list.php?i=list >>api link
var links = $('a.navlinks');
var toggler = $('.navtoggler');
var navcontent = $('.nav-content');
var closer = $('.fa-close');
var bars = $('.fa-bars');
var categorySearch = document.getElementById('categories')
var meals =[];
toggler.click(function(){
    let navwidth = navcontent.outerWidth();
    let toggelLeft = toggler.css('left')
    console.log(navwidth);
    if(toggelLeft == '0px'){
        navcontent.animate({ left: `${navwidth + toggelLeft}`}, 500);    
        toggler.animate({ left: `${navwidth}`}, 500);
        bars.addClass('d-none');
        closer.removeClass('d-none');
    }else{
        navcontent.animate({ left: `0px`}, 500);
        toggler.animate({ left: `0%`}, 500);
        closer.addClass('d-none');
        bars.removeClass('d-none');
    }
})

categorySearch.addEventListener('click',function(){
    $('mainHome').addClass('d-none');
    $('.categories').removeClass('d-none');
})


async function getMeals(){
    var request = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    );
    request = await request.json();
    meals = request.meals;
    console.log(request);
    console.log(meals);
    displayMeals();
}

function displayMeals(){
    var container =``;
    for(let i = 0; i<meals.length; i++){
        container += `
        <div class="col-lg-3 col-md-4 p-4">
        <div class="akla rounded-2 text-center position-relative overflow-hidden">
            <img src="${meals[i].strMealThumb}" class="w-100" alt="">
            <div class="hover rounded-2">
                <h2>${meals[i].strMeal}</h2>
            </div>
        </div>
        </div>
        `
    }
    document.getElementById('showMeals').innerHTML = container;
}

getMeals();

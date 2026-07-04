const deckCards = document.querySelectorAll('.hero-card');
        let activeIndex = 0;

        function rotateDeck() {
            deckCards.forEach(card => {
                card.classList.remove('active', 'prev', 'next');
            });

            activeIndex = (activeIndex + 1) % deckCards.length;
            const prevIndex = (activeIndex - 1 + deckCards.length) % deckCards.length;
            const nextIndex = (activeIndex + 1) % deckCards.length;

            deckCards[activeIndex].classList.add('active');
            deckCards[prevIndex].classList.add('prev');
            deckCards[nextIndex].classList.add('next');
        }
        // Cycle the main hero deck cards every 4.5 seconds
        setInterval(rotateDeck, 2500);
const states = {
andhrapradesh:{
name:"Andhra Pradesh",
tradition:"The Kingdom of Fiery Flavors",
story:"Known for intense spices, tangy gongura leaves and legendary coastal recipes.",
vegDishName:"Gutti Vankaya",
vegDishDesc:"Stuffed brinjals simmered in a rich peanut and spice gravy.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUiLm8Rj1R9KymfhG-0y9Qzg53-0fpbmqsA&s",
nonVegDishName:"Gongura Mutton",
nonVegDishDesc:"Tender mutton cooked with tangy gongura leaves.",
nonVegDishImage:"https://kingspremiumpickles.com/cdn/shop/files/mutton_gongura.jpg?v=1742549691",
dessertName:"Pootharekulu",
dessertDesc:"Paper-thin sweet layered with jaggery and ghee.",
dessertImage:"https://almondhouse.com/cdn/shop/files/Bellam_Pootharekulu.jpg?v=1747461598&width=3840"

},

arunachalpradesh:{
name:"Arunachal Pradesh",
tradition:"The Himalayan Simplicity",
story:"Fresh ingredients, mountain herbs and comforting traditional cooking.",

vegDishName:"Thukpa",
vegDishDesc:"Warm noodle soup with vegetables and herbs.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslejIjuWRY95gCji_CvIa-H52X7vUDpsXHg&s",
nonVegDishName:"",
nonVegDishDesc:"",
dessertName:"Khapse",
dessertDesc:"Traditional crispy festival pastry.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAYVzAkjYZ7_0BxYNDN5XPufOBZbgmC9nCQ&s",

},

assam:{
name:"Assam",
tradition:"Land of Rivers and Tea",
story:"Freshwater fish, rice and subtle flavors define Assamese cuisine.",

vegDishName:"Khar",
vegDishDesc:"Traditional alkaline curry made with raw papaya.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GaWNJWf4Eb4oRnLcg0Tgwefuy3d_GkXnbyZMJOnJAA&s=10",
nonVegDishName:"Masor Tenga",
nonVegDishDesc:"Tangy fish curry loved across Assam.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQymtpdpudoDAosXG28vz8fdH2aD_-wZPqd0fcfdS7A&s=10",
dessertName:"Pitha",
dessertDesc:"Rice cakes filled with coconut and jaggery.",
dessertImage:"https://articles-1mg.gumlet.io/articles/wp-content/uploads/2026/01/shutterstock_2247694631-1.jpg?compress=true&quality=80&w=1000&dpr=2.6",
},

bihar:{
name:"Bihar",
tradition:"Rustic Culinary Heritage",
story:"Simple ingredients transformed into unforgettable comfort food.",

vegDishName:"Litti Chokha",
vegDishDesc:"Roasted wheat balls served with smoked vegetables.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxpKSNavI7lOTa2qDqa4yG3eBXokpqZT7PXcUeXmBMQ&s=10",
nonVegDishName:"",
nonVegDishDesc:"",

dessertName:"Khaja",
dessertDesc:"Layered crispy sweet from Bihar.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWykS8MVP9ikAbd6fGFIVsU6DzXcO_858aFxYbcJniwg&s=10"
},
westbengal:{
name:"West Bengal",
tradition:"The Land of Fish & Sweets",
story:"West Bengal is famous for its mustard-based curries, river fish delicacies, and world-renowned desserts.",

vegDishName:"Shukto",
vegDishDesc:"A traditional Bengali mixed vegetable dish cooked with subtle spices and a hint of bitterness.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhm1TYtR7eAbv9E2o6tF0o62uwrMNACrB19zl3OGFug&s=10",

nonVegDishName:"Shorshe Ilish",
nonVegDishDesc:"Hilsa fish cooked in a rich mustard gravy, considered Bengal's most iconic dish.",

nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRWkDZFkQrO8uWoyw1W0IXU_yiNGWKp--xrR3NMCnBg&s=10",

dessertName:"Rosagolla",
dessertDesc:"Soft cottage cheese dumplings soaked in light sugar syrup, Bengal's most famous sweet.",

dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtODawFX2EM8ZtCfK4DjOmim1rfau07yHvR43sZzI3hQ&s=10"
},
chhattisgarh:{
name:"Chhattisgarh",
tradition:"Rice Bowl of India",
story:"Rice-based dishes dominate the culinary landscape.",

vegDishName:"Chila",
vegDishDesc:"Rice and lentil pancake served with chutney.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RAmCLB9YPe2PWOKyfBk_wvs81kL9rME6W5QowX6tSQ&s=10",
nonVegDishName:"",
nonVegDishDesc:"",

dessertName:"Dehrori",
dessertDesc:"Sweet rice dumplings soaked in syrup.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RAmCLB9YPe2PWOKyfBk_wvs81kL9rME6W5QowX6tSQ&s=10"
},

goa:{
name:"Goa",
tradition:"Indo-Portuguese Fusion",
story:"Seafood, vinegar and coconut influence every Goan kitchen.",

vegDishName:"Vegetable Vindaloo",
vegDishDesc:"Seasonal vegetables in spicy vinegar gravy.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3QXCGvxHqtRGyyK7wixy7YyCT455xW8oRnIGyfOakg&s=10",
nonVegDishName:"Prawn Balchao",
nonVegDishDesc:"Fiery prawn pickle-style curry.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4K8t5TF-RT0Q6UWQmSzu9T3fmXFt1scu54e-YaYIjQ&s=10",

dessertName:"Bebinca",
dessertDesc:"Traditional layered Goan dessert.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppnT357rqK1cpkkoU7DTO2eCIsJJQIvlHZ5cPDPO0og&s=10",
},

gujarat:{
name:"Gujarat",
tradition:"Sweet & Savory Harmony",
story:"Gujarati food balances sweetness and spice beautifully.",

vegDishName:"Undhiyu",
vegDishDesc:"Mixed vegetables cooked slowly with spices.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoM3ex5jbeaCXAs2jk1Uvk42tQI8E87rol6JyW83hRg&s=10",
nonVegDishName:"",
nonVegDishDesc:"",
dessertName:"Shrikhand",
dessertDesc:"Creamy saffron-flavored yogurt dessert.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmY-JMqdura5TCQxfeGgfzdZ8J7wXH12kXjZHXHzlg6w&s=10"
},

haryana:{
name:"Haryana",
tradition:"The Farmer's Feast",
story:"Nutritious and wholesome dishes rooted in agriculture.",

vegDishName:"Bajra Khichdi",
vegDishDesc:"Millet and lentil comfort food.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1eMNC-m_AzARh6QrGv2cxiDCRXW75qgM6SkjrYYqrA&s=10",
nonVegDishName:"",
nonVegDishDesc:"",

dessertName:"Meethe Chawal",
dessertDesc:"Sweet saffron rice with nuts.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQBFB5XlhR7_D0mAd7x3K7jVEjpa52e8iW6P35aBBTQ&s=10"

},

himachalpradesh:{
name:"Himachal Pradesh",
tradition:"Mountain Feasts",
story:"Slow-cooked foods and seasonal ingredients define Himachali cuisine.",

vegDishName:"Dham",
vegDishDesc:"Traditional festive platter.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR636lznwNxaQVfd4AUeijcjI7dD6Em5ujWwj4bEnAHEQ&s=10",
nonVegDishName:"Chha Gosht",
nonVegDishDesc:"Lamb curry cooked in yogurt gravy.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEgjMtJVzz4F5fTeW3q27uMWYVGlpmziEF_OTKuua8w&s=10",
dessertName:"Mittha",
dessertDesc:"Sweet rice with raisins and nuts.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIZ4itttXX3CTzw78O76ZfasmhvkJawCRTfMa7v1mcg&s=10"
},

jharkhand:{
name:"Jharkhand",
tradition:"Tribal Culinary Heritage",
story:"Ancient tribal traditions influence every recipe.",

vegDishName:"Dhuska",
vegDishDesc:"Fried rice-lentil bread.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7phOnmM5Q20EKJwy1ml2RIlD3iGQ1gExprvXUt4C8Xg&s=10",
nonVegDishName:"",
nonVegDishDesc:"",

dessertName:"Thekua",
dessertDesc:"Traditional jaggery cookie.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgI6nOv8O91qEk-j4-pd22qn05xTzpSfEdFbDo2kfWw&s=10"
},

karnataka:{
name:"Karnataka",
tradition:"Royal Mysore Heritage",
story:"A perfect blend of royal and coastal culinary traditions.",

vegDishName:"Bisi Bele Bath",
vegDishDesc:"Rice, lentils and vegetables cooked together.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShw0sekO7En09g_ferkfF0j4NmdEf6SJLoWvIgmJXeUQ&s=10",
nonVegDishName:"Mangalorean Fish Curry",
nonVegDishDesc:"Coastal fish curry with coconut and spices.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE33oUXmXCW7jdhF6DFCsY-S81DAPqFgdKqV9QwSqHA&s=10",

dessertName:"Mysore Pak",
dessertDesc:"Rich ghee sweet from Mysore.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEHd5oKHw-OciVxIoUJc3qRsM0QQKCswpXRdoRCwbOQ&s=10"
},

kerala:{
name:"Kerala",
tradition:"Land of Coconut & Spice",
story:"Spice trade and coastal influences shaped Kerala cuisine.",

vegDishName:"Appam & Stew",
vegDishDesc:"Soft rice pancakes with coconut milk stew.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7Wlp7fp9VYF1ol3D727E1Wbwrtn_51HcwqDJrc1oNA&s=10",
nonVegDishName:"Kerala Fish Curry",
nonVegDishDesc:"Tangy fish curry with coconut and kodampuli.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LvMvJJMVKA9Sq9eXvVM23IyNtD2U5-HLhuRZydkJfA&s=10",
dessertName:"Ada Pradhaman",
dessertDesc:"Traditional jaggery payasam.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0TgZwfLwRzdwvrpHgDT58mpF0RRC-YZgicmoimop6Q&s=10"
},

madhyapradesh:{
name:"Madhya Pradesh",
tradition:"Heart of India",
story:"Simple flavors and comforting dishes dominate central India.",

vegDishName:"Bhutte Ka Kees",
vegDishDesc:"Grated corn cooked with milk and spices.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOy7VauGfjMLpudZO8zK5MOkxVxZqpJFz_XlmRSNUxw&s=10",
nonVegDishName:"",
nonVegDishDesc:"",

dessertName:"Mawa Bati",
dessertDesc:"Khoya dumplings in saffron syrup.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRre6K_TEuub0_aW41X6XculC9kQv1xit8ZL6kxY-7fw&s=10"
},

maharashtra:{
name:"Maharashtra",
tradition:"Street Food Capital",
story:"From Mumbai streets to royal kitchens.",

vegDishName:"Vada Pav",
vegDishDesc:"Spiced potato fritter in a bun.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohFTUaguj03ymcVNyvP7fz01qIH2uVaCprKEYq72s9A&s=10",
nonVegDishName:"Kolhapuri Chicken",
nonVegDishDesc:"Fiery chicken curry from Kolhapur.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HCI3XER6tulVNxXh_BZZUUz492PGdNDp1LSwTi890Q&s=10",
dessertName:"Modak",
dessertDesc:"Sweet dumplings filled with coconut and jaggery.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgF_sXQsleV_nuvoie6cGz9HpEH7yc3iMM6yGJIOZOw&s=10"
},
manipur:{
name:"Manipur",
tradition:"Nature's Culinary Gift",
story:"Fresh herbs, seasonal vegetables and traditional cooking techniques define Manipuri cuisine.",

vegDishName:"Chamthong",
vegDishDesc:"A healthy vegetable stew flavored with local herbs.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVI1tkZRmpiIgbuTsUgOdaiXfvOd5oR0QadILT7tnBRg&s=10",
nonVegDishName:"Eromba",
nonVegDishDesc:"Mashed vegetables mixed with fermented fish and chilies.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJshHJ2y0ITnk6v86dV9Ppahp0NICgYu6FtAFmXZWrw&s=10",
dessertName:"Chak Hao Kheer",
dessertDesc:"Black rice pudding famous across Manipur.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHqsH3Sk-uRKVpfYHP5ypIr0ynnch2Ftgs95tVAzxTw&s=10"
},

meghalaya:{
name:"Meghalaya",
tradition:"Flavors from the Clouds",
story:"Hill cuisine centered around fresh produce and tribal traditions.",

vegDishName:"Tungrymbai",
vegDishDesc:"Traditional fermented soybean preparation.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkl71p1_fH3gEcEZ2paOSlxaCfIRsCiBhqjcGA1WwSNw&s",
nonVegDishName:"Jadoh",
nonVegDishDesc:"Rice cooked with meat and aromatic spices.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORGVqy2HZ7ddN0BdkhE9nEEtltb0oAHH0FbxwRvS9dw&s=10",
dessertName:"Pukhlein",
dessertDesc:"Sweet fried rice flour bread.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWDwIwjCFNXCSHo3cYEie3NZ2n4A_Yd5_ko35f4HUxg&s=10"
},

mizoram:{
name:"Mizoram",
tradition:"Simple & Fresh",
story:"Healthy cooking with local vegetables and minimal spices.",

vegDishName:"Bai",
vegDishDesc:"Traditional vegetable stew prepared with local greens.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkcOjFLBUWeSNiSq94xoqNq9ba1ntO0WcuWpS6SXI2g&s",
nonVegDishName:"",
nonVegDishDesc:"",
dessertName:"Chhangban",
dessertDesc:"Sticky rice cake served during festivals.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2Z7PYhl1Ngh4gtMENlxpbCrUpwoZfm1DZEiUxUtDQw&s=10"
},

nagaland:{
name:"Nagaland",
tradition:"Smoke & Fire",
story:"Known for smoked meats and bold indigenous flavors.",

vegDishName:"Axone Vegetable Curry",
vegDishDesc:"Vegetables cooked with fermented soybean.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKX1y2VOSgv0AGRJN1l2_a17YyGowx5w5ouNZVPo3vOw&s=10",
nonVegDishName:"Smoked Pork with Bamboo Shoot",
nonVegDishDesc:"Traditional smoked pork dish loved across Nagaland.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBeaPDBHo2Wf3ktKIYwxvVuk8I8ian3G0558zbtP_4g&s=10",
dessertName:"Sticky Rice Cake",
dessertDesc:"Sweet sticky rice preparation.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr18l77p1GmraTyihZ1T8kcL5qX9pMYTvD1ymb3xS-hw&s=10"
},

odisha:{
name:"Odisha",
tradition:"Temple Inspired Cuisine",
story:"Ancient temple kitchens continue to influence Odia cooking.",

vegDishName:"Dalma",
vegDishDesc:"Lentils and vegetables cooked with mild spices.",
vegDishImage:"https://www.maggi.in/en/recipes/dalma/",
nonVegDishName:"Machha Besara",
nonVegDishDesc:"Fish curry prepared with mustard paste.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaUaTKYpcYV4Vv_pAci_NVkYP-byC-BPQFHn7vOjwmw&s=10",
dessertName:"Chhena Poda",
dessertDesc:"Caramelized baked cottage cheese dessert.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieI0LpZWzHJBTAMcLa2uTSzZVXXBzxJGT6o1boow06g&s=10"
},
rajasthan:{
name:"Rajasthan",
tradition:"Royal Desert Heritage",
story:"Created to thrive in arid climates with rich flavors and preserved ingredients.",

vegDishName:"Dal Baati Churma",
vegDishDesc:"Baked wheat dumplings served with lentils and sweet churma.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhaB0whnLV_PP15iJwRaUww3UMaib8LK8hFDCnLv04g&s=10",
nonVegDishName:"Laal Maas",
nonVegDishDesc:"Fiery red mutton curry of Rajasthan.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdArOYNi1hssr9yUib96RuetXcuLOppCJAsXT5UZSWuA&s=10",
dessertName:"Ghevar",
dessertDesc:"Honeycomb-shaped festive sweet.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp6pLap0P_TspefsSuyhLmB828p3NtC0BW5EWEo3gmg&s=10"
},

sikkim:{
name:"Sikkim",
tradition:"The Himalayan Kitchen",
story:"Mountain cuisine influenced by Tibetan traditions.",

vegDishName:"Vegetable Momos",
vegDishDesc:"Steamed dumplings filled with vegetables.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl24W2FU4W6yry1933z-QGiyQ3qczgQrTuOcUC3LhgBy5lSQagOwf4hdUr&s=10",
nonVegDishName:"Chicken Momos",
nonVegDishDesc:"Juicy dumplings filled with seasoned chicken.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E_FdvUQRcqBNCVvsaGTLTvrAIn9SLtmgFaUyB1LVag&s=10",
dessertName:"Sel Roti",
dessertDesc:"Traditional ring-shaped rice bread.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSUjpVpqeAacny_8--lRKHQzZZAhIQLPXlGDOTplkxw&s=10"
},

tamilnadu:{
name:"Tamil Nadu",
tradition:"The Symphony of Spices",
story:"Ancient culinary traditions meet bold spice combinations.",

vegDishName:"Kanchipuram Idli",
vegDishDesc:"Spiced temple-style idli flavored with pepper and cumin.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9B2gRlYbGmHhhGC9T-RzlqC2wN1x7VlbfjQs-6V04A&s=10",
nonVegDishName:"Chettinad Chicken",
nonVegDishDesc:"Chicken curry prepared with roasted Chettinad spices.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JNU8lY7VHb9kVzIbl5PfvnZIr8JJ7o5zpBCZhykryA&s=10",
dessertName:"Jangiri",
dessertDesc:"Flower-shaped sweet soaked in sugar syrup.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0j_h8ZQ3dpv13uX78el2j1gHu_xrEx8SAq6Zmk5im4Q&s=10"
},

telangana:{
name:"Telangana",
tradition:"The Legacy of the Nizams",
story:"A blend of royal Mughlai influences and local spice traditions.",
vegDishName:"Bagara Baingan",
vegDishDesc:"Eggplant cooked in peanut, sesame and coconut gravy.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmTwoWMWxwLX3uyX1xHoeFZ6V8BbN9G_91bLmXcq9Jg&s=10",
nonVegDishName:"Hyderabadi Biryani",
nonVegDishDesc:"Fragrant layered rice dish with aromatic spices.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gqUG4VDGoKQxfAAXOjk0STlKzqxP1c1drYk2AXUDnA&s=10",
dessertName:"Double Ka Meetha",
dessertDesc:"Rich bread pudding with saffron and nuts.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6lbZVB-fq5mjfIfgwG0nJQD0OSBVIncTGt6buBilDQ&s=10"
},

tripura:{
name:"Tripura",
tradition:"Tribal Culinary Treasures",
story:"Traditional dishes feature bamboo shoots and local herbs.",
vegDishName:"Gudok",
vegDishDesc:"Vegetable preparation flavored with fermented fish alternatives.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlcC3QVzkUjaLQnuNbVEHbhq0Ii82ySnGEKOyn4gE8g&s=10",
nonVegDishName:"Mui Borok",
nonVegDishDesc:"Traditional tribal dish with fish and local ingredients.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xoSVGOoOsNoCTW-zjnt7S2bqD9bzXqQXHssLeaLGMQ&s=10",
dessertName:"Awan Bangwi",
dessertDesc:"Rice cake wrapped in leaves and steamed.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26XP3F4nZH04Tjk-SHJ6CkczlAhOX5kVL55733ujhiQ&s=10"
},

uttarpradesh:{
name:"Uttar Pradesh",
tradition:"Cuisine of Nawabs",
story:"The royal kitchens of Awadh produced legendary recipes.",

vegDishName:"Bedmi Puri & Aloo Sabzi",
vegDishDesc:"Traditional breakfast dish from Uttar Pradesh.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiSYriHLjV2RO2df_1z7XNOqriO1QhiMu-umuaEcgkw&s=10",
nonVegDishName:"Galouti Kebab",
nonVegDishDesc:"Melt-in-mouth kebabs from Lucknow.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQmwIOH37iOURwlnBtEm4V9iDZOaOBBDvqyxBIRV3ig&s=10",
dessertName:"Shahi Tukda",
dessertDesc:"Royal bread dessert enriched with saffron.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRtWnssqAKGdyXs40ewWWPNo6vFBYWYhftNp17ulnKA&s=10"
},

uttarakhand:{
name:"Uttarakhand",
tradition:"Flavors of the Himalayas",
story:"Nutritious mountain cuisine using local grains and greens.",

vegDishName:"Kafuli",
vegDishDesc:"Spinach and fenugreek-based traditional curry.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm4tWDSHliB81cS_LOT6qz0Is102aE8IuO1KORcsIjw&s=10",
nonVegDishName:"",
nonVegDishDesc:"",

dessertName:"Bal Mithai",
dessertDesc:"Chocolate-colored fudge coated with sugar pearls.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuf4kyQnp52oD-XzPpaWpASy0AASfdp1FPQD4zOpTIw&s=10"
},
jammuandkashmir:{
name:"Jammu & Kashmir",
tradition:"The Crown Jewel of Himalayan Cuisine",
story:"Known for Wazwan feasts, aromatic spices and royal cooking traditions.",

vegDishName:"Dum Aloo Kashmiri",
vegDishDesc:"Baby potatoes cooked in rich yogurt-based gravy.",
vegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUVUrN_C2WYJE41dNGMOV7D5j8z-LHX3rb21OQEGHuw&s=10",
nonVegDishName:"Rogan Josh",
nonVegDishDesc:"Slow-cooked mutton curry flavored with Kashmiri spices.",
nonVegDishImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2N69aCWXXqSc8qtONATHxOfYFcfei1yEVJNFW7O0H-A&s=10",
dessertName:"Shufta",
dessertDesc:"Dry fruits, saffron and honey dessert served during celebrations.",
dessertImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-kW-_7JPrlRSDtDGhS1RBj7nFL5aC31bFk7l2F0gXw&s=10"
},

 punjab: {
        name: "Punjab",
        tradition: "The Land of Abundance",
        story: "Punjabi cuisine is rich in dairy and tandoor cooking.",
        vegDishName:"Sarson Da Saag & Makki Di Roti",
        vegDishDesc:"Mustard greens slow cooked with spices. The ultimate Punjabi love story: Sarson da Saag & Makki di Roti!",   
        vegDishImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefELmA140TXCqrl0xDMtjiXmW7Waam7QO6HiQZT0I5A&s=10",
        nonVegDishName:"Butter Chicken",
        nonVegDishDesc:"Chicken cooked in creamy tomato gravy.",
        nonVegDishImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefELmA140TXCqrl0xDMtjiXmW7Waam7QO6HiQZT0I5A&s=10",

        dessertName: "Phirni",
        dessertDesc: "Creamy rice pudding served chilled.Chilled to perfection, rich in tradition. 🍲✨ #PunjabiPhirni",
        dessertImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aIDn8aHOnT2UnYv6InC0AxhxPiYxK4AYsk9F1KxpTQ&s=10"
    }

};

let currentState = states.andhrapradesh;

function loadState(stateKey){
    currentState = states[stateKey];
    showVeg();
}
function changeState(){
    const selectedState =
        document.getElementById("stateSelect").value;

    loadState(selectedState);
}
function loadState(stateKey){
    console.log(stateKey);
    currentState = states[stateKey];
    showVeg();
}
function showVeg(){

document.getElementById("stateName").innerText=currentState.name;
document.getElementById("stateTradition").innerText=currentState.tradition;
document.getElementById("stateStory").innerText=currentState.story;

document.getElementById("dishName").innerText=currentState.vegDishName;
document.getElementById("dishDesc").innerText=currentState.vegDishDesc;
document.getElementById("dishImage").src=currentState.vegDishImage;
document.getElementById("dessertName").innerText=currentState.dessertName;
document.getElementById("dessertDesc").innerText=currentState.dessertDesc;

if(currentState.vegDishImage)
document.getElementById("dishImage").src=currentState.vegDishImage;

if(currentState.dessertImage)
document.getElementById("dessertImage").src=currentState.dessertImage;
}

function showNonVeg(){

if(currentState.nonVegDishName===""){
alert("No famous non-vegetarian specialty for this state.");
return;
}

document.getElementById("dishName").innerText=currentState.nonVegDishName;
document.getElementById("dishDesc").innerText=currentState.nonVegDishDesc;
document.getElementById("dishImage").src=currentState.nonVegDishImage;
document.getElementById("dessertName").innerText=currentState.dessertName;
document.getElementById("dessertDesc").innerText=currentState.dessertDesc;

if(currentState.nonVegDishImage)
document.getElementById("dishImage").src=currentState.nonVegDishImage;

if(currentState.dessertImage)
document.getElementById("dessertImage").src=currentState.dessertImage;

}
showVeg();
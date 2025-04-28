import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use_product_store = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Banan', price: 79, image: '/images/banana.png', description: 'Banan to bardzo zdrowy owoc, bogaty w potas, magnez oraz witaminy. Świetnie sprawdza się jako szybka przekąska, dostarczająca energii i poprawiająca nastrój.', type: 'fruit', href: 'banan' },
    { id: 2, name: 'Wiśnia', price: 129, image: '/images/cherry.png', description: 'Wiśnie to soczyste owoce o lekko kwaśnym smaku, pełne przeciwutleniaczy i witamin. Regularne spożywanie wiśni może wspierać zdrowie serca oraz poprawiać jakość snu.', type: 'fruit', href: 'wisnia' },
    { id: 3, name: 'Kiwi', price: 159, image: '/images/kivi.png', description: 'Kiwi to owoc bogaty w witaminę C, błonnik i przeciwutleniacze. Wzmacnia układ odpornościowy, wspiera trawienie i wpływa korzystnie na wygląd skóry.', type: 'fruit', href: 'kiwi' },
    { id: 4, name: 'Cytryna', price: 89, image: '/images/lemon.png', description: 'Cytryna jest znana ze swoich właściwości oczyszczających i wzmacniających odporność. Jej orzeźwiający smak idealnie nadaje się do napojów i potraw.', type: 'fruit', href: 'cytryna' },
    { id: 5, name: 'Liczi', price: 199, image: '/images/licchi.png', description: 'Liczi to egzotyczny owoc o słodkim, aromatycznym smaku. Jest bogaty w witaminę C, potas i przeciwutleniacze, wspomagające zdrowie skóry i układu krążenia.', type: 'fruit', href: 'liczi' },
    { id: 6, name: 'Pomarańcza', price: 99, image: '/images/orange.png', description: 'Pomarańcze dostarczają dużą dawkę witaminy C oraz błonnika. Regularne spożywanie pomarańczy wzmacnia układ odpornościowy i poprawia trawienie.', type: 'fruit', href: 'pomarancza' },
    { id: 7, name: 'Ananas', price: 189, image: '/images/pineapple.png', description: 'Ananas to owoc tropikalny, który wspomaga trawienie dzięki wysokiej zawartości bromelainy. Jest soczysty, orzeźwiający i doskonały na upalne dni.', type: 'fruit', href: 'ananas' },
    { id: 8, name: 'Kapusta', price: 49, image: '/images/cabbage.png', description: 'Kapusta to warzywo bogate w witaminę K i C. Wspomaga trawienie, wzmacnia układ odpornościowy i jest podstawą wielu tradycyjnych dań kuchni polskiej.', type: 'vegetable', href: 'kapusta' },
    { id: 9, name: 'Papryka', price: 89, image: '/images/capsicum.png', description: 'Papryka to kolorowe warzywo o wysokiej zawartości witaminy C i antyoksydantów. Doskonale sprawdza się w sałatkach, daniach smażonych oraz jako zdrowa przekąska.', type: 'vegetable', href: 'papryka' },
    { id: 10, name: 'Marchew', price: 59, image: '/images/carrot.png', description: 'Marchew to warzywo bogate w beta-karoten, wspierające zdrowie oczu oraz skóry. Jest chrupiąca, słodka i bardzo uniwersalna w kuchni.', type: 'vegetable', href: 'marchew' },
    { id: 11, name: 'Dynia', price: 79, image: '/images/sweetpampkin.png', description: 'Dynia to warzywo pełne witamin A i E oraz błonnika. Idealna do zup, ciast i dań pieczonych, a jej naturalna słodycz podkreśla smak potraw.', type: 'vegetable', href: 'dynia' },
    { id: 12, name: 'Pomidor', price: 69, image: '/images/tomato.png', description: 'Pomidor to podstawa wielu kuchni świata. Bogaty w likopen i witaminę C, świetnie smakuje na surowo, w sosach i zupach.', type: 'vegetable', href: 'pomidor' }
  ])
  
  const get_product_by_id = (id) => products.value.find(p => p.id === parseInt(id))

  const update_product = (updated) => {
    const index = products.value.findIndex(p => p.id === updated.id)
    if (index !== -1) products.value[index] = { ...updated }
  }

  return { products, get_product_by_id, update_product }
})

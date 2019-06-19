var ProsecutorApp = angular.module("ProsecutorApp", []);


ProsecutorApp.run(function ($rootScope) {


    console.log("Welcome in Prosecutor website!");


});


ProsecutorApp.controller("HomeCtrl", function ($scope) {


    $scope.home = {};
    $scope.home.logo = "logo-napis-no-bg-02.JPG";

});




ProsecutorApp.controller("NewsCtrl", function ($scope) {


    $scope.news = {};
    $scope.news.title = "Aktualności";

    $scope.news.lista = [];
    $scope.news.lista = G_NEWS;


});


ProsecutorApp.controller("KoncertyCtrl", function ($scope) {


    $scope.koncerty = {};
    $scope.koncerty.title = "Koncerty";
    $scope.koncerty.subTitle = "Lista koncertów";

    $scope.koncerty.lista = [];
    $scope.koncerty.lista = G_NEWS;


});

ProsecutorApp.controller("SklepCtrl", function ($scope) {


    $scope.sklep = {};
    $scope.sklep.title = "Sklep";

    $scope.sklep.lista = [];
    $scope.sklep.lista = G_SKLEP;


});


ProsecutorApp.controller("ContactCtrl", function ($scope) {


    $scope.contact = {};
    $scope.contact.title = "Kontakt";

    $scope.contact.lista = [];

    $scope.contact.lista.push({
        title: "mail",
        desc: "prosecutorpl@o2.pl"
    });

    $scope.contact.lista.push({
        title: "facebook",
        desc: "https://www.facebook.com/prosecutorpl/"
    });


});


ProsecutorApp.controller("MuzykaCtrl", function ($scope) {
    $scope.music = {};
    $scope.music.lista = [];

    for (let i = 1; i <= 10; i++) {
        $scope.music.lista.push({
            link: "" + i + ".mp3"
        });
    }

    $scope.music.lista[0].name = "01. Dlaczego";
    $scope.music.lista[1].name = "02. Dyktatura Mózgu";
    $scope.music.lista[2].name = "03. Krew Czarnej Ziemi";
    $scope.music.lista[3].name = "04. Dla Kogo Świeci Słońce";
    $scope.music.lista[4].name = "05. Pustynia Śmierci";
    $scope.music.lista[5].name = "06. Umierać Spadając";
    $scope.music.lista[6].name = "07. Marsz";
    $scope.music.lista[7].name = "08. Cienka Czerwona Linia";
    $scope.music.lista[8].name = "09. Embrionalna Śmierć";
    $scope.music.lista[9].name = "10. Lód";
});


ProsecutorApp.controller("HistoriaCtrl", function ($scope) {


    $scope.historia = {};
    $scope.historia.title = "Historia zespołu";
    $scope.historia.historia = "W pewien listopadowy wieczór 1988 roku na jednej z ulic Bytomia spotkali sie dość przypadkowo dwaj kumple Harry i Pająk. Temu ostatniemu towarzyszyły jeszcze dwie osoby: Cliff i Dziadu. Nazwiązała się rozmowa o muzyce, z której wynikło to ze Dziadu i Cliff grając w hardrockowej kapeli mają zamiar odejść z zespolu bo nie odpowiadało im granie tego gatunku muzyki. Chcieli założyć wlasny zespół thrash metalowy i poszukiwali perkusisty. Tak sie akurat złożyło, że Harry grał właśnie na perkusji w zespole, który miał kłopoty ze składem (brak basisty), dlatego nie zastanawiając sie ani chwili zdecydował sie na współpracę z Cliffem i Dziadem. Tak wiec skład był mniej więcej ustalony ale brakowało jeszcze drugiego gitarzysty. Po krótkim okresie poszukiwań Dziadu i Harry skontaktowali sie z Pepkiem. Juz po zagraniu kilku riffów bylo wiadomo, że to gitarzysta, którego szukali. Rozważajac czy nazwa zespołu ma byc jedno czy dwu czlonowa, tym samym opróżniając kolejne butelki z piwem ostatecznie zdecydowano sie na jeden wyraz. Zespół przyjął nazwę PROSECUTOR. Zaczęły sie systematyczne próby. Niestety ze wzgledu na brak odpowiedniej sali odbywaly sie one w piwnicy domu, w którym mieszkał Dziadu. Dopiero we wrzesniu 1989r. udało sie im zalatwić pomieszczenia w ZDK \"Filar\" w Miechowicach dzielnicy Bytomia. W międzyczasie od zespołu odzedł Pająk, który nie spełniał oczekiwań jako wokalista, a jego role przejął Pepko i szybko okazało się, ze nie tylko jest świetnym gitarzystą, ale także potrafi dobrze spiewać, a jego wokal idealnie pasuje do muzyki która tworza. 11 listopada 1989 r. Prosecutor występuje pierwszy raz na żywo, przed niedużą publicznością i zostaje przyjęty bardzo goraco, co potwierdza, ze muzyka, która stworzyli trafi do fanów thrash metalu. W styczniu 1990r. nagrywaja swoje pierwsze demo \"DESERT OF DEATH\". Nagrana na amotorskim sprzęcie kaseta zawiera utwory studyjne a takze wersje koncertowe. PROSECUTOR w skladzie: Paweł \"PEPKO\" Piekarski - git.solowa, vocal; Marek \"DZIADU\" Niziołek - gitara; Dariusz \"CLIFF\" Grzyb - bass ; Ryszard \"HARRY\" Gilge - perkusja. Rozpoczyna serie koncertów z mniej lub bardziej znanymi zespolami polskiej sceny metalowej i nie tylko. Niestety w polowie roku od zespolu odchodzi Cliff, co uniemożliwia na jakiś czas zespołowi granie koncertów. Nie marnujac czasu trójka przyjaciół bierze sie za pracę nad nowym materialem muzycznym poszukujac jednoczesnie nowego basisty. Po jakims czasie do zespołu trafia Tomasz \"BANAN\" Lemanek co powoduje, ze Prosecutor \"zamyka\" się na ponad rok skupiajac sie tylko na pracy nad nowa plyta. 22 pazdziernika 1991r. Prosecutor występuje w Czechosłowackim miescie Karvina z austriacką grupa Pungent Stench. Ma to być test dla nowych utworów, zanim usłyszą je polscy fani. Na poczatku 1992r. Prosecutor wznawia działalność koncertową. Nowe utwory przysparzaja im wielu fanów. W sierpniu 1992r. zespół wystepuje na małej scenie w Jarocinie. Po powrocie z festiwalu PEPKO, DZIADU, BANAN i HARRY wchodzą do studia i nagrywaja swoja pierwsza plyte \"KREW CZARNEJ ZIEMI\", która rozchodzi sie w calej polsce jak \"ciepłe bułeczki\". Niestety po wydaniu płyty z zespołu odchodzi BANAN. Na jego miejsce trafia PACIK. Później, także Pepko rezygnuje z dalszego śpiewania, bardziej skupiając sie na graniu solówek. Zespól organizuje casting, którego efektem jest nowy wokalista WICIU. W 1993r. na kilka dni przed jednym z koncertów Dziadu ulega wypadkowi, w którym zostaja przecięte ścięgna palców jego prawej reki. Zatępuje go ZYGMUNT (Andrzej Brandys), kolega PACIKA, gitarzysta, który dotychczas grał tylko covery. W tym samym roku zespól rozstaje sie z PEPKIEM, a na stale w PROSECUTORZE zostaje ZYGMUNT.W nowym skladzie: DZIADU - gitary ; HARRY - perkusja ; WICIU - vocal ; PACIK - bass ; ZYGMUNT- gitary. Zespół PROSECUTOR gra kilka koncertów, a następnie zaczyna pracę nad druga plyta. Niestety druga płyta, która miała nazywać się \"SMUTEK\" nigdy nie zostaje zarejestrowana w studio ze względu na brak odpowiednich srodków finansowych. W międzyczasie zespół otrzymuje propozycje umieszczenia dwóch nowych utworów na międzynarodowej płycie- składance, która ma ukazać się we Szwecji. Do tego jednak nie dochodzi, gdyż ciagle problemy z wokalistą - Wiciem oraz coraz bardziej pogarszająca się atmosfera wewnątrz zespołu doprowadzaja do tego iż 26 lutego 1994r. Zespól PROSECUTOR występuje po raz ostatni przed publicznoscia a następnie zawiesza swoją dzialalność. Po 15 latach przerwy, długich rozmowach i morzu wypitego alkoholu 23 lutego 2010r. zespół PROSECUTOR wznawia swoją działalność!";



});

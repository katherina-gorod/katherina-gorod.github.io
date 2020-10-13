(function ($) {
    $(function () {
        let curLevel = 0;

        let addItem = function (title, body, position) {

            let c = $(".flex-container > div.item").length;
            let l = parseInt(c / 2);

            let itemHtml = _.template($("#item-template").html())({
                id: "item-" + c,
                title: title,
                body: body,
				position: position,
				
                className: "level-" + l + " hidden"
            });

            if (c % 2 === 1) {
                $(itemHtml).insertBefore($(".flex-container .v-spacer"));
            } else {
                $(itemHtml).insertAfter($(".flex-container .v-spacer"));
            }

            $("#item-" + c + " a.title").on("click", function (e) {
                e.preventDefault();
                $(this).parent().toggleClass("collapsed");
                return false;
            });
        };



        let fetchItems = function () {
            // @todo: replace with real data source

            let items = [];
            var pair;

            pair = {
                
                pair: [
                    {
                        title: "Fiktionen",
                        body: "<p>Ein Plural kritisiert den Singular. Er zeigt auf, dass es mehr als eins gibt. Mehr als eine Funktion und mehr als eine Wahrheit. Die Fiktionen zusammen sind eine Masse an Gegenerzählungen, die die Erzählung der Funktion und der Objektivität hinterfragen. Die Postmoderne ist die Epoche der Dekonstruktion. In ihr stieß der Funktionalismus auf breite Kritik, Meta-Erzählungen wurden verabschiedet. Emotionale, subjektive und irrationale Prinzipien sollten nicht länger von rationalen unterdrückt werden. Dies alles führte zu einer breiten Verschiebung gegen kulturelle Uniformierung.</p> <p></p>",
                        position: "right"
                    
                    }
                ,
                    {
                        title: "Funktion",
                        body: "<p>Die Formel form-follows-function sieht Funktionalität eng verknüpft mit Konzepten der Reduktion, Sachlichkeit, Nützlichkeit, Zweckmäßigkeit, Rationalität und Objektivität. Als umfassendes Programm wurde es zu einer Anleitung für gutes Design. Begriffe wie Formel oder Regel weisen auf die Nähe zu naturwissenschaftlichen Konzepten hin. Von naturphilosophischen und biologischen Einflüssen, über Aktualisierungen durch Adolf Loos bis zum Bauhaus, dem Sinnbild der Moderne, dessen 100. Geburtstag erst vor kurzem in nahezu allen kulturellen Institutionen gefeiert oder zumindest erwähnt wurde, durchzieht sich die Anfälligkeit zu Ideologien, denn die Definition des Funktionalismus selbst bleibt ungeklärt und so drängt sich die Frage auf: Wer entscheidet darüber, was wesentlich, also funktional, ist und was überflüssig?</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);
                
        
            pair = {
                pair: [
                    {
                        title: "Labor",
                        body: "<p>Das Labor ist der Arbeitsplatz des Spätkapitalismus. Im Labor hat die Arbeit keine feste Form, vielmehr gleicht sie einer sich selbst verformenden Gussform. Seine Logik ist die permanente Weiterbildung, seine Möglichkeit ist der unbegrenzte Aufschub, der Antrieb die Selbstkontrolle. Trotz freiheitlichen Aussehens, stehen die Einschließungs-mechanismen des Labors denen der Fabrik in nichts nach. Die Formen der Macht haben ihre festen Grenzen verloren und somit die Verantwortung über die Einschließung auf die Individuen übertragen. Das Labor produziert keine Objekte, da in einer Zeit der Überproduktion keine mehr notwendig sind. Da die Arbeit keine Form annimmt, hat sie kein Ende. Die fluiden Grenzen des Labors eröffnen Möglichkeiten, sich im Sinne des Experiments der Komplexität der Welt zu stellen, oder aber als unsichtbare Diensteisterinnen und Dienstleister des Spätkapitalismus dem Produkt zu dienen.</p><img src='/Users/katherinagorodynska/Desktop/1.png'>",
                        position: "right"
                    }
                ,
                    {
                        title: "Fabrik",
                        body: "<p>Die Fabrik ist der Arbeitsplatz der industrialisierten Disziplinargesellschaft. In ihr gibt es klare Verhaltensweisen und Rollen, sie ist ein definierter abgeschlossener und normativer Körper. Ihr Höhepunkt liegt zu Beginn des 20. Jahrhunderts. Sie beruht auf der Logik der Einschließung. Von einem geschlossenen Milieu wechselt das Individuum in das nächste: Von der Familie in die Schule in die Kaserne in die Fabrik. Die Fabrik organisiert Produktion und beruht auf der Zusammensetzung einer Produktivkraft, deren Gleichgewicht auf einen möglichst hohen Niveau für die Produktion, aber einem möglichst niedrigen Niveau für Löhne und Individualität aufgebaut ist. Die Arbeiter*innen der Fabrik sind diskontinuierliche Produzent*innen von Energie.</p>",
                        position: "left"
                    }
                ]
            };
            
            items.push(pair);
            
            pair = {
                pair: [
                    {
                        title: "<img src='GIFS/GIF2.gif'>",
                        body: "<p>Während in meiner anfänglichen  Recherche zu der Begrifflichkeit des Performativen die Performance einem Gegensatz der Form glich, fand ich im Laufe der Arbeit immer mehr Verschränkungen, was nicht verwunderlich scheint, heißt doch übersetzt „perform“: durch Form. So scheinen beide Begriffe einerseits eng verbunden, und stehen doch auch in Opposition. Während die Form eine abgeschlossene Gestalt ist, zeichnete sich die Performance (zumindest in der Zeit ihrer Einführung) dadurch aus, dass sie nicht reproduzierbar und flüchtig ist. Während der Begriff der Performanz aus der Spechakttheorie kommt und Sätze zusammenfasst, die von einer rein beschreibenden in eine handelnde Funkion übergehen, suchte die Performance als Kunstform nach der Befreiung aus kausaler Verkettung und richtete sich gegen den Objektcharakter der Kunst. Heute ist der Begriff der Performance auf weite Felder ausgebreitet, unter anderem ist er fest verankert in neuen Arbeitsstrukturen, die auch als „New Labor“ bezeichnet werden.</p>",
                        position: "right"
                        
                    }
                ,
                    {
                        title: "Form",
                        body: "<p>Geläufig wird zwischen Bedeutung und Materie. Eine Bedeutung gleicht einem Text, der interpretiert und dekodiert werden muss. Eine Materie aber ist eine Präsenz: ein Körper in einem Raum, der mit mehreren Sinnen erfahren werden kann und sich somit einem rein hermeneutischen Interpretieren entzieht. Somit kann man sagen, dass die Materie das Gemeinte ist, während Bedeutung dem Gemachten gleichkommt. Nach Aristoteles ist die Form das Gegenteil der Materie. Die Materie ist für ihn eine bereits natürlich vorliegende Substanz, ein „Stoff“ (1) ohne Form, aus dem der Mensch erst Formen als Kulturobjekte herstellt. Während der Stein demnach die Materie ist, ist das Haus die Form. Das Haus kann aber auch keine reine Bedeutung sein, denn, wenn ich nach der Bedeutung des Hauses suchte, dann ließe ich seine Form außer Acht. Mit Verweis auf Susan Sontags Text „Against Interpretation“ führt Robert Pfaller auf, inwiefern die Bedeutung selbst als ein Kulturobjekt eine Form ist. Wenn ich ein Haus also mit einer Bedeutung gleichsetzte, dann ersetzte ich die gegebene Form bloß durch eine andere. Damit zeichnet Pfaller nach, inwiefern sich die Opposition zwischen Bedeutung und Materie in dem Begriff der Form auflöse. Die Frage an die Form lautet also nicht: Was bedeutet die Form? Sondern: Weshalb ist die Form, wie sie ist? </p>>",
                        position: "left"
                    }
                ]    
        
            };


            items.push(pair);
            
            pair = {
                pair: [
                    {
                        title: "Performatives Design",
                        body: "<p></p>",
                        position: "right"
                        
                    }
                ,
                    {
                        title: "",
                        body: "",
                        position: "left"
                    }
                ]    
        
            };
            
            
            items.push(pair);
            
            pair = {
                pair:[ 
                    {
                        title: "Spur",
                        body: "<p>Historische, biografische und kulturelle Referenzen werden zu Spuren, die sich auf Oberflächen ablegen und sich gleichzeitig mit der Zeit hinter Oberflächen verstecken. Wie die Tapeten eines Hauses schichten sich Spuren aufeinander. Eine Spur weist immer auf Nuancen hin, denn sie weiß, dass es keine einzige gültige Wahrheit geben kann, da sie die feinen Abstufungen zwischen einem Schwarz und einem Weiß kennt. Sie beansprucht keine Absolutheit, sondern legt verborgene Schichten frei und bringt damit das hervor, was außerdem gemeint sein könnte. In diesem Zeichen der Mehrdeutigkeit und damit einer Abwendung von einem funktionalistischen und klassizistischen Denken, stand der Begriff der Spur im Zeichen der Dekonstruktion.</p>",
                        position: "right"
                    }
                ,
                    {
                        title: "OBERFLÄCHE",
                        body: "<p>Die Wahrheit ist vergleichbar mit Münzen, die ihr Bild verloren haben und nun als Metall, nicht mehr als Münzen in Betracht kommen.</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);
            
            pair = {
                pair: [
                    {
                        title: "KÖRPER",
                        body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                        position: "right"
                    }
                ,

                    {
                        title: "DING",
                        body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);

            pair = {
                pair: [
                    {
                        title: "VERSTEHEN",
                        body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                        position: "right"
                    }
                ,
                    {
                        title: "ERFAHREN",
                        body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                        position: "left"

                    }
                ]
            };
            items.push(pair);

            pair = {
                pair: [
                    {
                        title: "KUNST",
                        body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                        position: "right"
                    }
                ,
                    {
                        title: "LEBEN",
                        body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                        position: "left"
                    }
                ]
            };
            
            items.push(pair);
            
            pair = {
                pair: [
                    {
                        title: "HAUT",
                        body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                        position: "right"
                    }
                ,
                    {
                        title: "ORGAN",
                        body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                        position: "left"

                    }
                ]
            };
            
            items.push(pair);

             pair = {
                 pair: [
                     {
                        title: "end",
                        body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                        position: "right"
                     }
                ,                     
                     {
                        title: "und",
                        body: "<img src='/Users/katherinagorodynska/Desktop/BILDER/pp_knete_glow_blue_1-2.jpg'><img src='/Users/katherinagorodynska/Desktop/BILDER/pp_knete_glow_blue_3.jpg'>",
                        position: "left"
                    }
                 ]
             };
            items.push(pair);
            return items;
        };

/*
            for (let i = 1; i <= 12; i++) {
                let words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
                let text = [];
                let x = 10;
                while (--x) text.push(words[Math.floor(Math.random() * words.length)]);

                items.push({
                    title: "Überschrift " + i,
                    body: "<p>" + text + "</p>",
					position: "left"
                });
            }
*/
        
let shuffleArrayIndices = function (array) {
            let allNumbers = [];
            let shuffledNumbers = [];
            let itemCount = array.length;
            for (var i = 0; i < itemCount; i++){
                allNumbers.push(i);
            }
            for(var i = 0; i < itemCount; i++){
                let randomIndex = getRandomInt(itemCount);
                while(allNumbers[randomIndex] === undefined){
                    randomIndex = getRandomInt(itemCount);
                }
                shuffledNumbers.push(randomIndex);
                allNumbers[randomIndex] = undefined;    
            }
            return shuffledNumbers;
        }
        
        let addItems = function (pair) {
            if(pair != undefined){
                if(pair["0"])
                    addItemToPage(pair["0"]);
                if(pair["1"])
                    addItemToPage(pair["1"]);
            }      
        }
        
        let getRandomInt = function (max){
            return Math.floor(Math.random() * max);
        }
        
        let addItemToPage = function (pair) {              
            addItem(pair.title, pair.body, pair.position);
        }
        
        let displayHome = function () {
            $(".home").removeClass("collapsed");
            curLevel = 1;
            $(".item:not(.home)").addClass("collapsed").addClass("hidden");
        };
        
        let items = fetchItems();
        let shuffledArrayIndices = shuffleArrayIndices(items);
        for(var i = 0; i < items.length; i++){
            var index = shuffledArrayIndices[i];
            addItems(items[index].pair);
        }
        
        var timerReady = true;
        
        function waitForSeconds(seconds){
            timerReady = false;
            var seconds = 0.1;
            var timer = setInterval(function(){
                seconds--;
                if(seconds <= 0){
                    clearInterval(timer);
                    console.log("fertig");
                    timerReady = true;
                }
                console.log("timer " + timer);

            },1000);            
        }
        
        $(".v-spacer").on("mouseover", function (e) {
        //$(".v-spacer").on("click", function (e) {
            if (timerReady){
                e.preventDefault();
                if (!$(".home").hasClass("collapsed")) {
                    $(".home").addClass("collapsed");
                    curLevel = 1;
                    $(".flex-container div.level-" + curLevel + "").removeClass("hidden").removeClass("collapsed");
                } else {
                    curLevel++;
                    $(".flex-container div.item").addClass("collapsed");
                    $(".flex-container div.level-" + curLevel + "").removeClass("hidden").removeClass("collapsed");
                }
                waitForSeconds(2);
            }
            return false;
        });


        $(".home a.title").on("click", function (e) {
            console.log("clicked title");
            e.preventDefault();
            $(this).parent().toggleClass("collapsed");
            return false;
        });

        $("#help-button").on("click", function (e) {
            e.preventDefault();
            if ($(".hidden").length) {
                $(".flex-container div").removeClass("hidden");
                $(".home").addClass("collapsed");
            } else {
                displayHome();
            }
            return false;
        });

        //$("#help-button").draggable();

        displayHome();
    });
})(jQuery);

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

            items.push({
                title: "Fiktionen",
                body: "<p>Ein Plural kritisiert den Singular. Er zeigt auf, dass es mehr als eins gibt. Mehr als eine Funktion und mehr als eine Wahrheit. Die Fiktionen zusammen sind eine Masse an Gegenerzählungen, die die Erzählung der Funktion und der Objektivität hinterfragen. Die Postmoderne ist die Epoche der Dekonstruktion. In ihr stieß der Funktionalismus auf breite Kritik, Meta-Erzählungen wurden verabschiedet. Emotionale, subjektive und irrationale Prinzipien sollten nicht länger von rationalen unterdrückt werden. Dies alles führte zu einer breiten Verschiebung gegen kulturelle Uniformierung.</p>",
				position: "right"
            })

            items.push({
                title: "Funktion",
                body: "<p>Die Formel form-follows-function sieht Funktionalität eng verknüpft mit Konzepten der Reduktion, Sachlichkeit, Nützlichkeit, Zweckmäßigkeit, Rationalität und Objektivität. Als umfassendes Programm wurde es zu einer Anleitung für gutes Design. Begriffe wie Formel oder Regel weisen auf die Nähe zu naturwissenschaftlichen Konzepten hin. Von naturphilosophischen und biologischen Einflüssen, über Aktualisierungen durch Adolf Loos bis zum Bauhaus, dem Sinnbild der Moderne, dessen 100. Geburtstag erst vor kurzem in nahezu allen kulturellen Institutionen gefeiert oder zumindest erwähnt wurde, durchzieht sich die Anfälligkeit zu Ideologien, denn die Definition des Funktionalismus selbst bleibt ungeklärt und so drängt sich die Frage auf: Wer entscheidet darüber, was wesentlich, also funktional, ist und was überflüssig?</p>",
				position: "left"
            })
		
			items.push({
                title: "Labor",
                body: "<p>Das Labor ist der Arbeitsplatz des Spätkapitalismus. Im Labor hat die Arbeit keine feste Form, vielmehr gleicht sie einer sich selbst verformenden Gussform. Seine Logik ist die permanente Weiterbildung, seine Möglichkeit ist der unbegrenzte Aufschub, der Antrieb die Selbstkontrolle. Trotz freiheitlichen Aussehens, stehen die Einschließungs-mechanismen des Labors denen der Fabrik in nichts nach. Die Formen der Macht haben ihre festen Grenzen verloren und somit die Verantwortung über die Einschließung auf die Individuen übertragen. Das Labor produziert keine Objekte, da in einer Zeit der Überproduktion keine mehr notwendig sind. Da die Arbeit keine Form annimmt, hat sie kein Ende. Die fluiden Grenzen des Labors eröffnen Möglichkeiten, sich im Sinne des Experiments der Komplexität der Welt zu stellen, oder aber als unsichtbare Diensteisterinnen und Dienstleister des Spätkapitalismus dem Produkt zu dienen.</p>",
				position: "right"
            })

            items.push({
                title: "Fabrik",
                body: "<p>Die Fabrik ist der Arbeitsplatz der industrialisierten Disziplinargesellschaft. In ihr gibt es klare Verhaltensweisen und Rollen, sie ist ein definierter abgeschlossener und normativer Körper. Ihr Höhepunkt liegt zu Beginn des 20. Jahrhunderts. Sie beruht auf der Logik der Einschließung. Von einem geschlossenen Milieu wechselt das Individuum in das nächste: Von der Familie in die Schule in die Kaserne in die Fabrik. Die Fabrik organisiert Produktion und beruht auf der Zusammensetzung einer Produktivkraft, deren Gleichgewicht auf einen möglichst hohen Niveau für die Produktion, aber einem möglichst niedrigen Niveau für Löhne und Individualität aufgebaut ist. Die Arbeiter*innen der Fabrik sind diskontinuierliche Produzent*innen von Energie.</p>",
				position: "left"
            })
			
			items.push({
                title: "Perform",
                body: "<p><br>0.Perform ist der Imperativ des Wortes performen. Übersetzt würde er Durch Form bedeuten. Performen kommt aus der Sprechakttheorie und fasst Sätze zusammen, die das, was sie beschreiben auch vollziehen. Damit gewinnt das Erfahren mehr Wert als das Verstehen. Performances als Kunstform zielen darauf ab, Grenzen zwischen Kunst und Leben aufzuheben, aber auch die Grenzen zwischen verschiedenen Kunstformen, sie suchen den Ausweg aus kausaler Verkettung, sind vergänglich und im Gegensatz zu Objekten besitzen sie keine feste und somit abgeschlossene Form. Der Gebrauch des Wortes performativ hat sich auf weitere Felder ausgebreitet, so spricht man auch von performativer Recherche, performativen Denken oder performativen Design. </p><p>01. Perform <br>Nur die gelebte oder gezeigte Erfahrung der Performance ermöglicht es, die gelebte Gewissheit des Anderen zu erschüttern. Nur so kann an die Komfortzone einer Subjekts gerührt werden. Der Kommunikation auf der visuellen Ebene, auf der  sich das Subjekt willentlich und wunschdenkend selbst sieht, wird eine Kommunikation auf einer anderen, einer haptischen Ebene entgegengesetzt.</p>",
				position: "right"
            })

            items.push({
                title: "Form",
                body: "<p>Eine Form ist die äußere Schicht eines Objektes. Ihre Oberfläche kann verschiedene Eigenschaften haben. Als Grenze zwischen einem Inneren und einem Außen kann sie zu einem Träger von Informationen werden. Manche Oberflächen fügen einem Objekt einen Wert hinzu. Erst anhand seiner Oberfläche erkennen wir ein Stück Plastik als eine wertvolle Kreditkarte an. Abgeschlossene Formen können als aktive Oberflächen die Möglichkeit haben, eine Tür zu einer nicht-abgeschlossenen Welt zu öffnen, darunter fallen beispielsweise Bildschirme.</p><img src='/Users/katherinagorodynska/Desktop/bachelor/visualisierungen: bildmaterial/0_praxis-übungen/GIF_3.gif'>",
				position: "left"
            })
			
			items.push({
                title: "Spur",
                body: "<p>Eine Spur als eine Materialisierung von Geschichtlichkeit widersetzt sich der Klassifizierung. Sie weist auf die Nuancen, die spurenartigen, teils noch undefinierten, Abstufungen zwischen zwei Gegensatzpaaren hin. Sie beansprucht keine Absolutheit, sondern legt verborgene Schichten frei. Damit bringen Spuren das hervor, was außerdem gemeint sein könnte und zeichnen damit eine Mehrdeutigkeit ab.</p>",
				position: "right"
            })

            items.push({
                title: "Oberfläche",
                body: "<p>Die Wahrheit ist vergleichbar mit Münzen, die ihr Bild verloren haben und nun als Metall, nicht mehr als Münzen in Betracht kommen.</p>",
				position: "left"
            })
			
			items.push({
                title: "Körper",
                body: "<img src='/Users/katherinagorodynska/Desktop/FLÄCHEN_1.png'><img src='/Users/katherinagorodynska/Desktop/FLÄCHEN_13.png'><img src='/Users/katherinagorodynska/Desktop/FLÄCHEN_14.png'>",
				position: "right"
            })

            items.push({
                title: "Ding",
                body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
				position: "left"
            })

            items.push({
                title: "Verstehen",
                body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                position: "right"
            })

            items.push({
                title: "Erfahren",
                body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                position: "left"

                  })

            items.push({
                title: "Kunst",
                body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                position: "right"
            })

            items.push({
                title: "Leben",
                body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                position: "left"

                  })

             items.push({
                title: "Haut",
                body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                position: "right"
            })

            items.push({
                title: "Organ",
                body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                position: "left"

                  })

             items.push({
                title: "end",
                body: "<p>Ein Körper hat eine Form, diese Form ist allerdings im Gegensatz zu Objekten nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                position: "right"
            })

            items.push({
                title: "und",
                body: "<br><img src='/Users/katherinagorodynska/Desktop/bachelor/visualisierungen: bildmaterial/0_praxis-übungen/Scans Knete (Formen)/Knete_2.jpg'><img src='/Users/katherinagorodynska/Desktop/bachelor/visualisierungen: bildmaterial/0_praxis-übungen/Scans Knete (Formen)/Knete_5.jpg'>",
                position: "left"

                  })
            

        

            


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
            return items;
        };

        let shuffleArray = function (array) {
            
			let currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        };

        let shuffleItems = function (items) {
			let leftArr = [];
			let rightArr = [];

			let counter = items.length;
			for (let item of items){
				if(counter % 2 == 0){
					leftArr.push(item);
				}else{
					rightArr.push(item)
				}
				counter --;
            }
			
			let randomLeftArr = shuffleArray(leftArr);
			let randomRightArr = shuffleArray(rightArr);

			
			let resortedArr = []
			
			let leftPosition = items.length /2;
			let rightPosition = leftPosition;
			
			for(let i = 0; i < items.length; i ++){
				if (i % 2 == 0 ){
					resortedArr.push(randomLeftArr[leftPosition])
					leftPosition --;
				}
				else {
					resortedArr.push(randomRightArr[rightPosition]);
					rightPosition --;
				}
			}
			console.log(resortedArr);
			return resortedArr;
			
            return(items);
             
        };

        let displayHome = function () {
            $(".home").removeClass("collapsed");
            curLevel = 1;
            $(".item:not(.home)").addClass("collapsed").addClass("hidden");
        };

		for (let item of shuffleItems(fetchItems())) {
			if(item != undefined)
				addItem(item.title, item.body, item.position);
		}

        $(".v-spacer").on("mouseover", function (e) {
		//$(".v-spacer").on("click", function (e) {
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

            return false;
        });


        $(".home a.title").on("click", function (e) {
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
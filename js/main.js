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
                        title: "Fiktion",
                        body: "<p>Ein Plural kritisiert den Singular. Er zeigt auf, dass es mehr als eins gibt. Mehr als eine Funktion und mehr als eine Wahrheit. Die Fiktionen zusammen sind eine Masse an Gegenerzählungen, die die Erzählung der Funktion und der Objektivität hinterfragen. Die Postmoderne ist die Epoche der Dekonstruktion. In ihr stieß der Funktionalismus auf breite Kritik. Emotionale, subjektive und irrationale Prinzipien sollten nicht länger von rationalen unterdrückt werden.</p>",
                        position: "right"
                    
                    }
                ,
                    {
                        title: "Funktion",
                        body: "<p>Einer Lösung liegt immer ein zu lösendes Problem zugrunde und somit unterliegt sie einer klaren Funktion. Form und Funktion sind zwei zentrale designtheoretische Begriffe.  Auf der Suche nach der Form als zentrale Aufgabe des Designs, wurde in der Moderne die Funktion zur Lösung ernannt. Die in Design, Kunst und Architektur prominenteste Schule, die sich diesem Form-Problem widmete war das von Walther Gropius errichtete Bauhaus, das oft gleichgesetzt wird mit der Moderne. Das darin enthaltene Konzept  „Form-Follows-Function“ geht von einer gegenseitigen Abhängigkeit von Form und Funktion aus, damit einher gehen Konzepte der Reduktion, Sachlichkeit, Nützlichkeit, Zweckmäßigkeit, Rationalität und Objektivität. Die Frage hier ist: Wer entscheidet darüber, was funktional ist und für wen soll dies dann funktionieren?</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);


            pair = {
                
                pair: [
                    {
                        title: "Lösung",
                        body: "<p>Als ich Kim von meiner Idee des Performativen Designs erzähle, sagt sie:<br><br>Oh es klingt aber abstrakt<br><br>Sandra sagt: Alles heutzutage steht im Zeichen des und, wenn sogar Design nun performativ sein muss, dann frage ich mich: Was ist passiert mit dem Ende?<br><br>Milan fragt: Was ist Design?<br>Er sagt selbst: Design ist die Lösung eines Problems<br><br>Lieber Filip, ich benutze dich nun ein wenig für meinen Abschluss. Ich habe eine sehr generelle Frage: Was denkst du von dem Satz, den Leute so oft sagen, wenn sie nach dem Unterschied zwischen Design und Kunst gefragt werden? Ich meine diesen: Design ist die Lösung eines Problems. Ich habe immer ein Problem damit, irgendwie. Ich frage dich, weil ich ein Gespräch mit Milan hatte und er sagte das. Eine Lösung klingt für mich final und auch funktional und der Glaube an Funktionalität ist wie der Glaube an Objektivität. Dann frage ich mich: Wer ist die Person, die über eine Lösung bestimmt, und für wen soll dann diese Lösung funktionieren? Ich will nicht dieses körperlose Wesen sein, das an gutes Design glaubt. Aber, vielleicht bin ich auch bloß nicht fähig eine Lösung zu finden, weil ich mich nicht für eine entscheiden kann. Ich sage immer: Ich denke mehr in Dilemmas als in Lösungen, aber ich mag das, um ehrlich zu sein.</p>",
                        position: "right"
                    
                    }
                ,
                    {
                        title: "Nutzen",
                        body: "<p>Heute beobachten wir eine Verschiebung der Nützlichkeitsfrage von einem Problem der Form zu einem Problem der Technik. Die darin enthaltenen Fragen sind aber struktureller Natur und bleiben damit bestehen. Wer entwirft für wen? Während neue Smart Home-Modelle, um ein Beispiel zu nennen, für manche auf den ersten Blick als eine funktionale Lösung für das Haushalts-Problem erscheinen, wird bei näherer Betrachtung schnell deutlich, dass man auf einer intelligenten Küchenarbeitsplatte auch nicht schneller Brot backen kann und, dass ein Herd mit integriertem Bildschirm, der Kochen und einen Film sehen gleichzeitig ermöglichen soll, letztendlich nur die Kochende (die, wenn man sich auch nur kurz die Werbung solcher Geräte anschaut immer noch eine die ist) länger als nötig in der Küche behält. Somit gestaltet in diesem Beispiel eine herrschende Klasse unter Berufung des Funktionalismus und ohne einer Kenntnis der tatsächlichen Lebenswelt der Menschen, für die sie gestaltet, mit ihrer Problemlösung bloß die Legitimation der eigenen Macht.</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);
                
        
            pair = {
                pair: [
                    {
                        title: "Labor",
                        body: "<p><img src='GIFS/GIF_Probe.gif'>Das Labor ist der Arbeitsplatz des Spätkapitalismus. Im Labor hat die Arbeit keine feste Form, vielmehr gleicht sie einer sich selbst verformenden Gussform. Seine Logik ist die permanente Weiterbildung, seine Möglichkeit ist der unbegrenzte Aufschub, der Antrieb die Selbstkontrolle. Trotz freiheitlichen Aussehens, stehen die Einschließungs-mechanismen des Labors denen der Fabrik in nichts nach. Die Formen der Macht haben ihre festen Grenzen verloren und somit die Verantwortung über die Einschließung auf die Individuen übertragen. Das Labor produziert keine Objekte, da in einer Zeit der Überproduktion keine mehr notwendig sind. Da die Arbeit keine Form annimmt, hat sie kein Ende. Die fluiden Grenzen des Labors eröffnen Möglichkeiten, sich im Sinne des Experiments der Komplexität der Welt zu stellen, oder aber als unsichtbare Diensteisterinnen und Dienstleister des Spätkapitalismus dem Produkt zu dienen.</p><img src='/Users/katherinagorodynska/Desktop/1.png'>",
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
                        title: "Perform",
                        body: "<p>Während in meiner anfänglichen Recherche zu der Begrifflichkeit des Performativen die Performance einem Gegensatz der Form glich, fand ich im Laufe der Arbeit immer mehr Verschränkungen, was nicht verwunderlich scheint, heißt doch übersetzt „perform“: durch Form. So scheinen beide Begriffe einerseits eng verbunden, und stehen doch auch in Opposition. Während die Form eine abgeschlossene Gestalt ist, zeichnete sich die Performance (zumindest in der Zeit ihrer Einführung) dadurch aus, dass sie nicht reproduzierbar und flüchtig ist. Während der Begriff der Performanz aus der Spechakttheorie kommt und Sätze zusammenfasst, die von einer rein beschreibenden in eine handelnde Funkion übergehen, suchte die Performance als Kunstform nach der Befreiung aus kausaler Verkettung und richtete sich gegen den Objektcharakter der Kunst. Heute ist der Begriff der Performance auf weite Felder ausgebreitet, unter anderem ist er fest verankert in neuen Arbeitsstrukturen, die auch als „New Labor“ bezeichnet werden.</p><img src='/Users/katherinagorodynska/Desktop/Form-Perform (GitHub)/katherina-gorod.github.io/GIFS/GIF3.gif'>",
                        position: "right"
                        
                    }
                ,
                    {
                        title: "Form",
                        body: "<p>Geläufig wird unterschieden zwischen Bedeutung und Materie. Eine Bedeutung gleicht einem Text, der interpretiert und dekodiert werden muss. Eine Materie aber ist eine Präsenz: ein Körper in einem Raum, der mit mehreren Sinnen erfahren werden kann und sich somit einem rein hermeneutischen Interpretieren entzieht. Somit kann man sagen, dass die Materie das Gemeinte ist, während Bedeutung dem Gemachten gleichkommt. Nach Aristoteles ist die Form das Gegenteil der Materie. Die Materie ist für ihn eine bereits natürlich vorliegende Substanz, ein „Stoff“ ohne Form, aus dem der Mensch erst Formen als Kulturobjekte herstellt. Während der Stein demnach die Materie ist, ist das Haus die Form. Das Haus kann aber auch keine reine Bedeutung sein, denn, wenn ich nach der Bedeutung des Hauses suchte, dann ließe ich seine Form außer Acht. Mit Verweis auf Susan Sontags Text „Against Interpretation“ führt Robert Pfaller auf, inwiefern die Bedeutung selbst als ein Kulturobjekt eine Form ist. Wenn ich ein Haus also mit einer Bedeutung gleichsetzte, dann ersetzte ich die gegebene Form bloß durch eine andere. Damit zeichnet Pfaller nach, inwiefern sich die Opposition zwischen Bedeutung und Materie in dem Begriff der Form auflöse. Die Frage an die Form lautet also nicht: Was bedeutet die Form? Sondern: Weshalb ist die Form, wie sie ist? </p>>",
                        position: "left"
                    }
                ]    
        
            };


            items.push(pair);
            
            pair = {
                pair: [
                    {
                        title: "Deform",
                        body: "<p>Vorangetrieben durch die schockierenden Erfahrungen des zweiten Weltkrieges und gleichzeitig einer Beschleunigung der Industrialisierung sowie einer Technologisierung, fand aus Frankreich ausgehend im Westen der 60er Jahre ein allumfassender kultureller Wandel statt. Im Zuge des Linguistic Turns wurde das Konzept der Wahrheit und damit auch die Natur der Worte und Kommunikation großflächig hinterfragt. Der von Derrida konstruierte Begriff „différance“ wurde zu einer Metapher des neuen Denkens. Derrida schrieb ihn absichtlich mit einem a statt eines e, um zu verdeutlichen, dass es in der französischen Sprache (im Hören) keinen Unterschied mache, wie er geschrieben wird. Gleichzeitig rief Marshall McLuhan das Ende der „Gutenberg-Galaxis“ aus. Der linearen Produktionen von Wissen, wie sie noch zu Zeiten Gutenbergs in Form des Buchdrucks vorangetrieben wurde, sollten nun neuen nicht-linearen Formen weichen. Diese sind nur ein paar Beispiele in einer Vielzahl von Veränderungsprozessen, die die neue Kulturepoche der Postmoderne kennzeichneten.</p>",
                        position: "right"
                        
                    }
                ,
                    {
                        
                        title: "Transform",
                        body: "<p><img src='GIFS/GIF_3.gif'></p>",

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
                        title: "Oberfläche",
                        body: "<p>Eine Form ist eine äußere Schicht. Ihre Oberfläche kann verschiedene Eigenschaften haben. Als Grenze zwischen einem Inneren und einem Außen kann sie zu einem Träger von Informationen werden. Manche Oberflächen fügen einem Objekt einen Wert hinzu. Erst anhand seiner Oberfläche erkennen wir ein Stück Plastik als eine wertvolle Kreditkarte an. Abgeschlossene Formen können als aktive Oberflächen die Möglichkeit haben, eine Tür zu einer nicht-abgeschlossenen Welt zu öffnen, darunter fallen beispielsweise Bildschirme.</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);
            
            pair = {
                pair: [
                    {
                        title: "Flexibilität",
                        body: "<p>Ein Körper hat eine Form, diese Form ist, anders als bei einem Ding, nicht abgeschlossen und in Veränderung. Durch äußere Eingriffe kann die Form des Körpers sich auch in einem Moment verändern. Durch seine lebende Materie, kann er allerdings zu der ursprünglichen Form wiederkehren. Der Körper besteht zu 80 Prozent aus Wasser, in seinem Inneren ist er dauerhaft in Bewegung. Damit ist er fluide, und befindet sich an der Grenze zwischen klarer Gestalt und offener Materie.</p>",
                        position: "right"
                    }
                ,

                    {
                        title: "Stabilität",
                        body: "<p>Die westlichen Sprachen sind Dingsprachen. In einem Zustand der Stabilität der Gegenstände kann die Welt durch Zeichen beschrieben werden, die eine Orientierung in der Welt ermöglichen. Die heutigen Lebenswelten sind allerdings keine stabilen Einheiten. Sie entwickeln sich dynamisch, feste Zeichen- und Objektbeziehungen bestehen nur für kurze Zeiteinheiten. In einer solchen von Dynamisierung geprägten Welt verlieren die Zeichen ihre Repräsentationsfunktion. In einer Gegenwart, die mehr von Ereignissen, als von Dingen geprägt ist und Begriffe somit immer abstrakter werden, müssen neue Formen von Orientierungssystemen entwickelt werden, da Dingsprachen nicht mehr fähig sind, die Welt zu beschreiben. Die immer abstrakteren Begriffe (und Dinge) brauchen wieder konkrete Zusammenhänge im Leben selbst, in den Praxen, wo sie von Bedeutung sind.</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);

            pair = {
                pair: [
                    {
                        title: "Körper",
                        body: "<p>Donna Haraways Konzept der „Situierten Wissen“ steht für ein Wissensverständnis außerhalb des Glaubens an Objektivität, welches sie als Mythos betrachtet. Ihr nach ist Wissen immer das Wissen von Personen oder Personengruppen, die mit Körpern gleichzusetzen sind. Körper ist dabei immer ein Körper mit einer Historie, sowohl einer geschichtlichen, als auch sozialen und psychoanalytischen, während ein objektives Wissen ein körperloses ist. Ein körperloses Wissen wird zu einem göttlichen Wissen. Verkörperte Wissen auf der anderen Seite, gibt es so viele, wie es Körper gibt in der Welt. Somit soll Wissen aus seinen hegemonialen Kontexten entnommen werden. Donna Haraway fordert dazu auf den Begriff der „Situierten Wissen“ nur im Plural zu verwenden als ein Zeichen dafür, dass es nicht das eine Wissen geben kann. Wenn es nicht das eine Wissen geben kann und keine objektive Sicht auf die Dinge, dann kann es auch keine objektiven und funktionalistischen Lösungen geben.<img src='/Users/katherinagorodynska/Desktop/Form-Perform (GitHub)/katherina-gorod.github.io/BILDER/pp_knete_glow_blue_1-2.jpg'><img src='/Users/katherinagorodynska/Desktop/Form-Perform (GitHub)/katherina-gorod.github.io/BILDER/pp_knete_glow_blue_3.jpg'></p>",
                        position: "right"
                    }
                ,

                    {
                        title: "Ding",
                        body: "<p>Die in den 80er Jahren von Bruno Latour entwickelte „Akteur-Netzwerk-Theorie“ geht davon aus, dass menschliche und nicht-menschliche Akteure gemeinsam Netzwerke ausbilden, die durch Interaktion Bedeutung erzeugen und Handlungen anleiten können. Menschen, Maschinen und Gegenstände handeln in einem „Parlament der Dinge“ also gemeinsam. (14) Latour weist damit darauf hin, dass zu dem Entstehen eines Buches nicht nur eine immaterielle Idee nötig ist, sondern auch materielle Gegenstände wie Papier, Drucker, Farbe.  Auch im Feld des Designs kam es in der Postmoderne zu einer Veränderung des Verständnisses von Gegenständen. Objekte wurden nach emotionalen und  individuellen Erfahrung- und Gebrauchszusammenhängen untersucht. So wurde ein Stuhl nicht mehr als bloße Funktion (zum sitzen) gedacht, sondern als ein Objekt mit einem komplexen Repertoire an Zeichen und Bedeutungen. Diese Theorien eröffneten ein Verständnis von materiellen Gegenständen, die flexibel und unabgeschlossen sein können.</p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);

            pair = {
                pair: [
                    {
                        title: "Berühren",
                        body: "<p>Roland Barthes unterscheidet in der Rezeption ästhetischer Arbeit zwischen einem „studium“ und einem „punktum“. Während ein „studium“ eine versichernde Kraft besitze und darauf abziele, Interessen und Meinungen zu bestärken, die ein Subjekt bereits als für sich passend erachtet, habe es nicht die Kraft, BetrachterInnen skeptisch zu machen. Skeptisch würde eine Form erst dann machen können, wenn sie ihre RezipientInnen nicht bloß spiegelt, sondern wenn sie auf einer haptischen Ebene kommuniziert. Diese haptische Ebene nennt Barthes das „punktum“. Um auf einer haptischen Ebene zu kommunizieren, benötigt die Form ästhetische (nicht etwa kognitive) Bearbeitung, denn nur so besitze sie die Kraft, ihre RezipientInnen „tatsächlich (zu) berühren“ und somit zu einer nachdenklichen oder skeptischen Haltung beizutragen. Erst in der Arbeit innerhalb der formalen Grenzen könnten KulturproduzentInnen sich den damit verbundenen ästhetischen Differenzen stellen.</p>",
                        position: "right"
                    }
                ,

                    {
                        title: "Sehen",
                        body: "<p><img src='BILDER/Pfaller.png'></p>",
                        position: "left"
                    }
                ]
            };
            items.push(pair);

            pair = {
                pair: [
                    {
                        title: "Ende",
                        body: "<p><img src='BILDER/2037022.jpg'></p>",
                        position: "right"
                    }
                ,

                    {
                        title: "<img src= 'GIFS/GIF_1.gif'>",
                        body: "<p>Die Vermischung von Informativität und Naivität beschrieben die Kulturwissenschaftler Timotheus Vermeulen und Robin van der Anker als ein Pendelmoment, welches kennzeichnend ist für die Struktur der Gefühle in der Metamoderne. Mit dem Begriff „Metaxis“,  wird von Plato eine Existenz im fortwährenden Dazwischen beschrieben, oszillierend zwischen entgegengesetzten Polen. In diesem Zustand zwischen Enthusiasmus und Ironie, zwischen Empathie und Apathie, zwischen Hoffnung und Melancholie gibt es keine Balance. Jedes Mal, dass ein modernistischer Enthusiasmus in Richtung Fanatismus schlägt, bringt das Gewicht des Pendels es wieder zurück zur Ironie oder Apathie. Somit bleibt das Pendel dauerhaft in der Bewegung des Dilemmas: Es sucht, in dem besten Wissen, nicht zu finden.</p>",
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

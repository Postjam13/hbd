
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);

(function() {
  var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

  MESSAGES = [];

  MESSAGES.push({
    delay: 2000,
    text: "Hola amor, se que no esperabas esto o quizá no era ni necesario. Llevaba rato sin hacer algo asi para ti, te recuerdas que tienes alguna nota perdida por allí está tambien fijala y guardala. Solo quiero decirte que el hecho de tenerte a mi lado y poder compartir momentos tan maravillosos durante este año me han llenado de felicidad."
  });

  MESSAGES.push({
    delay: 12000,
    text: "No todo ha sido perfecto, pero dime hay algo perfecto realmente? no en nosotros los humanos y apesar de vivir gran parte de nuestras vidas buscando ser mejor jámas conseguiremos vernos como algunas personas nos ven. Ese es el caso de nosotros, nadie te ve como te veo a ti chaparrita, y nadie me ve como tú a mi. Desde el día del accidente que di inicio a una breve amistad, luego aunque con miedo empezamos a compartir muchísimo más y sin darnos cuenta empezamos a querernos un potito y potito a potito de ser amigos a ser mosotes terminamos empezando nuestra relación de novios."
  });

  MESSAGES.push({
    delay: 27000,
    text: "Ya de novios hemos pasado momentos triste, molestos, momentos de incertidumbre por el pasado, por miedo, por comentarios tontos de tu novio o sin lugar; pero si me preguntas a mi, todo lo que realmente importa son los momentos de risas, de alegría, cuando hemos sido nosotros justo como cuando te pusiste ese gorrito de oso o como cuando pones la canción de la Factoria jajajjajaj incluso el momento del reel de un gato y un pedito jajajjaj lo recuerdas porque yo si. En fin son tantos momentos a tu lado, desde la primer salida que tenia miedo y estaba nervioso, tú lo notaste pero luego todo fluyo y  al final de ese día llego nuestros primer abrazo."
  });

  MESSAGES.push({
    delay: 45000,
    text: "Recuerdas cuando te hiciste la resonancia? ese día pasaste a poli y fue la primer vez que llegue a tu casa. Ese dia me avente por segunda vez a abrazarte pero no fue como la primer vez, fue más bonito aún alli fue el inicio de los mosotes, iba seguido a tu casa, me quedaba hasta tarde, me quedaba mimido jajjajaja y también poco despues conoci a tu papá por accidente, que momento mas tenso aquel jajajajaj"
  });

  MESSAGES.push({
    delay: 57000,
    text: "Luego empezo nuestra relación actual de novios, de ser mi chaparrita, mi bebé, mi amor. Como paso no me preguntes pero paso, ambos así lo quisimos y así lo seguimos queriendo más que nunca. Desde ese momento al día de hoy 23 de diciembre de 2021 han pasado 7 meses, y 14 días o si lo quieres en dias 228 días desde que somos novios y se que desde entonces nuestra relacion se ha visto en momentos tan altos como bajos, enojos, peleas pero ambos hemos visto cosas malas en el otro pero las cosas buenas predominan aunque como humanos tengamos la tendencia a ver lo malo, creeme cuando te digo que tú haz echo un cambio en mi haz sacado muchas cosas malas de mí, se que no he tenido mi mejores momentos pero haz echo que aún así todo este año sea de felicidad, haz echo que sonría con el corazón que este de muy buen humor cuando no tengo ganas de nada. Así que como me haz dicho no estas en el pico de tu vida pero tampoco estás mal, date tiempo, piensa por ti, cree en ti que alli me tendras apoyandote, escuchandote y a tu lado. Nos merecemos esto que tenemos y será muchisimo mejor con el tiempo, tendremos mejor estabilidad emocional, económica, social(te lo dice alguien que no le interesa eso en absoluto pero que quiere salir del caparazón junto a ti). "
  });

  MESSAGES.push({
    delay: 92000,
    text: "Llevamos 7 meses y pico, y no tengo duda que todo mejorará, así que mi amor no me extiendo más y dejo que sigas tus actividades sin no antes decir que te quiero muchisimo que me haces enormemente feliz y que espero los próximos años haga con anterioridad este pequeño detalle muy a mi modo, y una de las metas que tengo es mantener más esa sonrisa en tu rostro que me llena de paz, amor y felicidad. Te quiero mi pulguita eres una novia, amiga, compañera y mujer maravillosa y no dudes que nos merecemos el uno al otro y juntos lograremos grandes cosas 🌈⚡︎"
  });

  MESSAGES.push({
    delay: 107000,
    text: "Espero que cumplas muchísimos años mas y que este sea el primero de muchos mensajes para ti en esta fecha aunque tarde jajjajaja un abrazo y se que no es el mejor momento pero queria darte algo más aunque solo sean unas cuantas palabras, Te Queyo Musho mi Buu!!!"
  });  

  $container = $("#container");

  $message = $("#message");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function(element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
    // Default properties.
    defaults = {
      probability: 0.2,
      glitches: '_ _ _ ',
      blank: '',
      duration: text.length * 30,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    // Convert the element to a jQuery object and build the settings object.
    $element = $(element);
    settings = $.extend(defaults, options);
    // Convenience methods.
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    // Glitch values.
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    // Ghost values.
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    // Text values.
    textCharacters = text.split('');
    textLength = textCharacters.length;
    // Order and output arrays.
    order = (function() {
      var results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
// Build the output array.
    for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    // Animate the text.
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        var index, k, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text);
      }
    };
    // Animate the text.
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    var data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
    }
  };

  initialise = function() {
    var index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxDQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBRUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxZQUFGOztFQUNiLFFBQUEsR0FBVyxDQUFBLENBQUUsVUFBRjs7RUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLFVBQUY7O0VBQ1gsVUFBQSxHQUFhOztFQUViLFFBQUEsR0FBVyxRQUFBLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBQTtBQUVYLFFBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsZUFBQSxFQUFBLGdCQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSxpQkFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxjQUFBLEVBQUEsVUFBQSxFQUFBLElBQUE7O0lBQ0UsUUFBQSxHQUNFO01BQUEsV0FBQSxFQUFhLEdBQWI7TUFDQSxRQUFBLEVBQVUsT0FEVjtNQUVBLEtBQUEsRUFBTyxFQUZQO01BR0EsUUFBQSxFQUFVLElBQUksQ0FBQyxNQUFMLEdBQWMsRUFIeEI7TUFJQSxJQUFBLEVBQU0sZUFKTjtNQUtBLEtBQUEsRUFBTztJQUxQLEVBRko7O0lBVUUsUUFBQSxHQUFXLENBQUEsQ0FBRSxPQUFGO0lBQ1gsUUFBQSxHQUFXLENBQUMsQ0FBQyxNQUFGLENBQVMsUUFBVCxFQUFtQixPQUFuQixFQVhiOztJQWNFLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtNQUFNLElBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEdBQW5CO2VBQTRCLEVBQTVCO09BQUEsTUFBQTtlQUFtQyxDQUFDLEVBQXBDOztJQUFOO0lBQ1YsSUFBQSxHQUFPLFFBQUEsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFBO2FBQW1CLENBQUEsYUFBQSxDQUFBLENBQWtCLE9BQWxCLENBQUEsRUFBQSxDQUFBLENBQThCLElBQTlCLENBQUEsT0FBQTtJQUFuQixFQWZUOztJQWtCRSxVQUFBLEdBQWEsUUFBUSxDQUFDO0lBQ3RCLGdCQUFBLEdBQW1CLFVBQVUsQ0FBQyxLQUFYLENBQWlCLEVBQWpCO0lBQ25CLFlBQUEsR0FBZSxnQkFBZ0IsQ0FBQztJQUNoQyxpQkFBQSxHQUFvQixRQUFRLENBQUM7SUFDN0IsUUFBQTs7QUFBWTtNQUFBLEtBQUEsa0RBQUE7O3FCQUFDLElBQUEsQ0FBSyxNQUFMLEVBQWEsUUFBYjtNQUFELENBQUE7O1NBdEJkOztJQXlCRSxTQUFBLEdBQVksUUFBUSxDQUFDLElBQVQsQ0FBQTtJQUNaLGVBQUEsR0FBa0IsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsRUFBaEI7SUFDbEIsV0FBQSxHQUFjLGVBQWUsQ0FBQztJQUM5QixNQUFBOztBQUFVO01BQUEsS0FBQSxpREFBQTs7cUJBQUMsSUFBQSxDQUFLLE1BQUwsRUFBYSxPQUFiO01BQUQsQ0FBQTs7U0E1Qlo7O0lBK0JFLGNBQUEsR0FBaUIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxFQUFYO0lBQ2pCLFVBQUEsR0FBYSxjQUFjLENBQUMsT0FoQzlCOztJQW1DRSxLQUFBLEdBQVE7Ozs7a0JBQWdCLENBQUMsSUFBakIsQ0FBc0IsSUFBQyxDQUFBLE9BQXZCO0lBQ1IsTUFBQSxHQUFTLEdBcENYOztJQXVDRSxLQUFTLHFGQUFUO01BQ0UsV0FBQSxHQUFjLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLENBQUMsWUFBQSxHQUFlLENBQWhCLENBQTNCO01BQ2QsZUFBQSxHQUFrQixRQUFRLENBQUMsV0FBRDtNQUMxQixjQUFBLEdBQWlCLE1BQU0sQ0FBQyxDQUFELENBQU4sSUFBYSxRQUFRLENBQUM7TUFDdkMsU0FBQSxHQUFZLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQjtNQUM1QixTQUFBLEdBQWUsU0FBSCxHQUFrQixlQUFsQixHQUF1QztNQUNuRCxNQUFNLENBQUMsSUFBUCxDQUFZLFNBQVo7SUFORixDQXZDRjs7SUFnREUsTUFBQSxHQUFTO01BQUEsS0FBQSxFQUFNO0lBQU47SUFDVCxNQUFBLEdBQVM7TUFBQSxLQUFBLEVBQU07SUFBTjtJQUNULFVBQUEsR0FDRTtNQUFBLFFBQUEsRUFBUyxRQUFRLENBQUMsUUFBbEI7TUFDQSxJQUFBLEVBQUssUUFBUSxDQUFDLElBRGQ7TUFFQSxJQUFBLEVBQU0sUUFBQSxDQUFBLENBQUE7QUFDVixZQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxFQUFBO1FBQU0sUUFBQSxHQUFXLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFDLFVBQUEsR0FBYSxDQUFkLENBQTFCO1FBQ1gsS0FBUywwRkFBVDtVQUNFLEtBQUEsR0FBUSxLQUFLLENBQUMsQ0FBRDtVQUNiLE1BQU0sQ0FBQyxLQUFELENBQU4sR0FBZ0IsY0FBYyxDQUFDLEtBQUQ7UUFGaEM7ZUFHQSxRQUFRLENBQUMsSUFBVCxDQUFjLE1BQU0sQ0FBQyxJQUFQLENBQVksRUFBWixDQUFkO01BTEksQ0FGTjtNQVFBLFFBQUEsRUFBVSxRQUFBLENBQUEsQ0FBQTtlQUNSLFFBQVEsQ0FBQyxJQUFULENBQWMsSUFBZDtNQURRO0lBUlYsRUFuREo7O1dBK0RFLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxLQUFWLENBQWdCLFFBQVEsQ0FBQyxLQUF6QixDQUErQixDQUFDLE9BQWhDLENBQXdDLE1BQXhDLEVBQWdELFVBQWhEO0VBakVTOztFQXFFWCxPQUFBLEdBQVUsUUFBQSxDQUFBLENBQUE7QUFDVixRQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7SUFBRSxLQUFBLDBEQUFBOztNQUNFLE9BQUEsR0FBVSxVQUFVLENBQUMsR0FBWCxDQUFlLEtBQWY7TUFDVixPQUFPLENBQUMsU0FBUixHQUFvQjtNQUNwQixPQUFBLEdBQVU7UUFBQSxLQUFBLEVBQU8sSUFBSSxDQUFDO01BQVo7TUFDVixRQUFBLENBQVMsT0FBVCxFQUFrQixJQUFJLENBQUMsSUFBdkIsRUFBNkIsT0FBN0I7SUFKRjtFQURROztFQVFWLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtBQUNiLFFBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7SUFBRSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQWY7SUFDQSxLQUFBLDBEQUFBOztNQUFBLFFBQVEsQ0FBQyxNQUFULENBQWdCLEtBQWhCO0lBQUE7SUFDQSxVQUFBLEdBQWEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsR0FBaEI7SUFDYixPQUFBLENBQUE7RUFKVzs7RUFPYixVQUFBLENBQUE7QUFoR0EiLCJzb3VyY2VzQ29udGVudCI6WyJNRVNTQUdFUyA9IFtdXG5NRVNTQUdFUy5wdXNoIGRlbGF5OjAsICAgIHRleHQ6XCJJbmNvbWluZyB0cmFuc21pc3Npb24uLi4gSW5jb21pbmcgdHJhbnNtaXNzaW9uLi5JbmNvbWluZyB0cmFuc21pc3Npb24uLkluY29taW5nIHRyYW5zbWlzc2lvbi4uSW5jb21pbmcgdHJhbnNtaXNzaW9uLi5JbmNvbWluZyB0cmFuc21pc3Npb24uLkluY29taW5nIHRyYW5zbWlzc2lvbi4uSW5jb21pbmcgdHJhbnNtaXNzaW9uLi5JbmNvbWluZyB0cmFuc21pc3Npb24uLkluY29taW5nIHRyYW5zbWlzc2lvbi4uSW5jb21pbmcgdHJhbnNtaXNzaW9uLi5JbmNvbWluZyB0cmFuc21pc3Npb24uLkluY29taW5nIHRyYW5zbWlzc2lvbi4uSW5jb21pbmcgdHJhbnNtaXNzaW9uLi5JbmNvbWluZyB0cmFuc21pc3Npb24uLkluY29taW5nIHRyYW5zbWlzc2lvbi4uSW5jb21pbmcgdHJhbnNtaXNzaW9uLi5JbmNvbWluZyB0cmFuc21pc3Npb24uLkluY29taW5nIHRyYW5zbWlzc2lvbi4uXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MTIwMCwgdGV4dDpcIllvdSBkb24ndCB0YWxrIHRvIGFueWJvZHkuXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MjIwMCwgdGV4dDpcIllvdSBkb24ndCBpbnRlcmFjdCB3aXRoIGFueWJvZHkuXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MzYwMCwgdGV4dDpcIllvdXIgd2hvbGUgc2Vuc2Ugb2YgcmVhbGl0eSBpcywgcHJldHR5IHdhcnBlZC4uLlwiXG5NRVNTQUdFUy5wdXNoIGRlbGF5OjUyMDAsIHRleHQ6XCJEb2VzIGl0IGJvdGhlciB5b3UgdGhhdCB3ZSdyZSBub3QgcmVhbD9cIlxuXG4kY29udGFpbmVyID0gJChcIiNjb250YWluZXJcIilcbiRtZXNzYWdlID0gJChcIiNtZXNzYWdlXCIpXG4kYW5pbWF0ZSA9ICQoXCIjYW5pbWF0ZVwiKVxuJHBhcmFncmFwaCA9IG51bGxcblxuc2NyYW1ibGUgPSAoZWxlbWVudCwgdGV4dCwgb3B0aW9ucykgLT5cblxuICAjIERlZmF1bHQgcHJvcGVydGllcy5cbiAgZGVmYXVsdHMgPVxuICAgIHByb2JhYmlsaXR5OiAwLjJcbiAgICBnbGl0Y2hlczogJy18L1xcXFwnXG4gICAgYmxhbms6ICcnXG4gICAgZHVyYXRpb246IHRleHQubGVuZ3RoICogNDBcbiAgICBlYXNlOiAnZWFzZUluT3V0UXVhZCdcbiAgICBkZWxheTogMC4wXG5cbiAgIyBDb252ZXJ0IHRoZSBlbGVtZW50IHRvIGEgalF1ZXJ5IG9iamVjdCBhbmQgYnVpbGQgdGhlIHNldHRpbmdzIG9iamVjdC5cbiAgJGVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gIHNldHRpbmdzID0gJC5leHRlbmQgZGVmYXVsdHMsIG9wdGlvbnNcblxuICAjIENvbnZlbmllbmNlIG1ldGhvZHMuXG4gIHNodWZmbGUgPSAoKSAtPiBpZiBNYXRoLnJhbmRvbSgpIDwgMC41IHRoZW4gMSBlbHNlIC0xXG4gIHdyYXAgPSAodGV4dCwgY2xhc3NlcykgLT4gXCJcIlwiPHNwYW4gY2xhc3M9XCIje2NsYXNzZXN9XCI+I3t0ZXh0fTwvc3Bhbj5cIlwiXCJcblxuICAjIEdsaXRjaCB2YWx1ZXMuXG4gIGdsaXRjaFRleHQgPSBzZXR0aW5ncy5nbGl0Y2hlc1xuICBnbGl0Y2hDaGFyYWN0ZXJzID0gZ2xpdGNoVGV4dC5zcGxpdCAnJ1xuICBnbGl0Y2hMZW5ndGggPSBnbGl0Y2hDaGFyYWN0ZXJzLmxlbmd0aFxuICBnbGl0Y2hQcm9iYWJpbGl0eSA9IHNldHRpbmdzLnByb2JhYmlsaXR5XG4gIGdsaXRjaGVzID0gKCh3cmFwIGxldHRlciwgJ2dsaXRjaCcpIGZvciBsZXR0ZXIgaW4gZ2xpdGNoQ2hhcmFjdGVycylcblxuICAjIEdob3N0IHZhbHVlcy5cbiAgZ2hvc3RUZXh0ID0gJGVsZW1lbnQudGV4dCgpXG4gIGdob3N0Q2hhcmFjdGVycyA9IGdob3N0VGV4dC5zcGxpdCAnJ1xuICBnaG9zdExlbmd0aCA9IGdob3N0Q2hhcmFjdGVycy5sZW5ndGhcbiAgZ2hvc3RzID0gKCh3cmFwIGxldHRlciwgJ2dob3N0JykgZm9yIGxldHRlciBpbiBnaG9zdENoYXJhY3RlcnMpXG5cbiAgIyBUZXh0IHZhbHVlcy5cbiAgdGV4dENoYXJhY3RlcnMgPSB0ZXh0LnNwbGl0ICcnXG4gIHRleHRMZW5ndGggPSB0ZXh0Q2hhcmFjdGVycy5sZW5ndGhcblxuICAjIE9yZGVyIGFuZCBvdXRwdXQgYXJyYXlzLlxuICBvcmRlciA9IFswLi4udGV4dExlbmd0aF0uc29ydCBAc2h1ZmZsZVxuICBvdXRwdXQgPSBbXVxuXG4gICMgQnVpbGQgdGhlIG91dHB1dCBhcnJheS5cbiAgZm9yIGkgaW4gWzAuLi50ZXh0TGVuZ3RoXVxuICAgIGdsaXRjaEluZGV4ID0gTWF0aC5mbG9vciBNYXRoLnJhbmRvbSgpICogKGdsaXRjaExlbmd0aCAtIDEpXG4gICAgZ2xpdGNoQ2hhcmFjdGVyID0gZ2xpdGNoZXNbZ2xpdGNoSW5kZXhdXG4gICAgZ2hvc3RDaGFyYWN0ZXIgPSBnaG9zdHNbaV0gb3Igc2V0dGluZ3MuYmxhbmtcbiAgICBhZGRHbGl0Y2ggPSBNYXRoLnJhbmRvbSgpIDwgZ2xpdGNoUHJvYmFiaWxpdHlcbiAgICBjaGFyYWN0ZXIgPSBpZiBhZGRHbGl0Y2ggdGhlbiBnbGl0Y2hDaGFyYWN0ZXIgZWxzZSBnaG9zdENoYXJhY3RlclxuICAgIG91dHB1dC5wdXNoIGNoYXJhY3RlclxuXG4gICMgQW5pbWF0ZSB0aGUgdGV4dC5cbiAgb2JqZWN0ID0gdmFsdWU6MFxuICB0YXJnZXQgPSB2YWx1ZToxXG4gIHBhcmFtZXRlcnMgPVxuICAgIGR1cmF0aW9uOnNldHRpbmdzLmR1cmF0aW9uXG4gICAgZWFzZTpzZXR0aW5ncy5lYXNlXG4gICAgc3RlcDogLT5cbiAgICAgIHByb2dyZXNzID0gTWF0aC5mbG9vciBvYmplY3QudmFsdWUgKiAodGV4dExlbmd0aCAtIDEpXG4gICAgICBmb3IgaSBpbiBbMC4ucHJvZ3Jlc3NdXG4gICAgICAgIGluZGV4ID0gb3JkZXJbaV1cbiAgICAgICAgb3V0cHV0W2luZGV4XSA9IHRleHRDaGFyYWN0ZXJzW2luZGV4XVxuICAgICAgJGVsZW1lbnQuaHRtbCBvdXRwdXQuam9pbiAnJ1xuICAgIGNvbXBsZXRlOiAtPlxuICAgICAgJGVsZW1lbnQuaHRtbCB0ZXh0XG5cbiAgIyBBbmltYXRlIHRoZSB0ZXh0LlxuICAkKG9iamVjdCkuZGVsYXkoc2V0dGluZ3MuZGVsYXkpLmFuaW1hdGUgdGFyZ2V0LCBwYXJhbWV0ZXJzXG5cblxuXG5hbmltYXRlID0gKCkgLT5cbiAgZm9yIGRhdGEsIGluZGV4IGluIE1FU1NBR0VTXG4gICAgZWxlbWVudCA9ICRwYXJhZ3JhcGguZ2V0IGluZGV4XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSAnJ1xuICAgIG9wdGlvbnMgPSBkZWxheTogZGF0YS5kZWxheVxuICAgIHNjcmFtYmxlIGVsZW1lbnQsIGRhdGEudGV4dCwgb3B0aW9uc1xuICByZXR1cm5cblxuaW5pdGlhbGlzZSA9ICgpIC0+XG4gICRhbmltYXRlLmNsaWNrIGFuaW1hdGVcbiAgJG1lc3NhZ2UuYXBwZW5kIFwiPHA+XCIgZm9yIHRleHQsIGluZGV4IGluIE1FU1NBR0VTXG4gICRwYXJhZ3JhcGggPSAkY29udGFpbmVyLmZpbmQgXCJwXCJcbiAgYW5pbWF0ZSgpXG4gIHJldHVyblxuXG5pbml0aWFsaXNlKClcbiJdfQ==
//# sourceURL=coffeescript
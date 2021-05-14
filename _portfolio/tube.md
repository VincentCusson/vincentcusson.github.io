---
title: "Etu{d,b}e"
excerpt: "Performance setup in collaboration with Tommy Davis and autonomous musical agents. <br/><img src='/images/tube.jpeg'>"
collection: portfolio
---
*This text is (and probably will always be) a Work In Progress.*

In collaboration with the saxophonist [Tommy Davis](http://www.tommysaxophone.com/), we propose improvised performances including autonomous musical agents and live instrumentists. We are using a combination of three frameworks from different composer-programmers. These agents’ behaviour is directed by various machine listening functions which may be summarized as: follow my step and follow that way (<a href="#nika2017">Nika, 2017</a>). We are designing a modular environment to test several performative environments, explore contrasting human-machine groupings, and develop various machine listening and agency functions. 
We consider these explorations like a type of *étude* as in the traditional use of the term in music pedagogy. Our improvisations are presenting situations where the human and its digital counterpart are studying (étudier) each other in realtime. The autonomous musical agents can even *learn* over the course of multiple performances by creating an offline memory bank. We want to assess whether this would improve the perceived quality of the human-machine interaction during an improvisation.
<br>

### Performing DYCI2 for the North American Saxophone Alliance virtual conference

<div class="container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oUbeL_lAhFU" title="DYCI2 improvisation" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="overlay">
        <p style="font-size:60%;">Credits: Marie-Chantal Leclair, Tommy Davis, and Vincent Cusson</p>
    </div>
</div>

### Adapting Existing Framework
We are adapting these three existing environments to our specific performance situation:
* **DYCI2** by [Jérôme Nika](https://jeromenika.com/) (France)
* **_derivations** by [Ben Carey](https://bencarey.net/) (Australia)
* **CTIP2** by [Sergio Kafejian](https://musicabrasilis.com/composers/sergio-kafejian) (Brazil)

From simple pitch detection categorization to more complex live musical listening, the different improvisation environments offer autonomous capabilities in their own way. Two of them include audio effects that are modified either via agent input or manually. We already started customizing CTIP2 and DYCI2 for our needs by adding or refining graphical user interface (GUI) features. We want to play with these tools and explore their minute functions and details; amazing things can occur when testing the limits of such systems. We are collaborating with each composer-programmer and have their permission to modify and perform the patches. 

### Interaction and collaboration
Currently, the realtime control over the multiple parameters of an agent is somewhat limited. 
It is possible to interact with the system via Max/MSP's GUI and with typical computer input interfaces like the keyboard, the mouse, or a MIDI controller. It is often the role of a dedicated performer playing the electronics. However, we argue that an instrumentist should be able to control directly some parameters to enable more intricate interaction with a musical agent.

It has been shown that two-way communication between a musician and a improvising musical agents (<a href="#corma2019">McCormack, 2019</a>) helps reach the state of flow (<a href="#csiks2000">Csikszentmihalyi, 1990</a>). Multimodal feedback should be designed to inform the instrumentist about the patch state during an improvisation. In addition to the obvious sonic output from the agent, our first iteration will integrate visual indicators via a screen. Attempting to ease the performers cognitive load<!-- [magnusson] -->, all parameters cannot be shown at the same time. Further research would involve experimenting with haptic feedback<!-- [hapticKeys] --> as another communication channel. In any case, we'll have to build the system gradually to allow for more complex collaborative scenarios over time. 


---
<br>
Towards this goal, we will develop a digital interface fixed onto an instrument, which would send data to the computer for further processing. The design of similar digital musical instruments (DMI) and various forms of meta- or augmented-instrument is not new and our work is inspired by colleagues at IDMIL [EDU] (<a href="#sulli2018">Sullivan, 2018</a>) and elsewhere [andrewMcPherson].

In addition to traditional instruments, we will work with an unusual one: The Tube. It is a two meter long flexible plastic tube with a saxophone mouthpiece attached at one end. The inspiration comes from the concept of *infra-instrument* described as "restricted in its expressivity, broken or only a portion of a standard instrument" (<a href="#bow2005">Bowers, 2005</a>). This allows the performer to maintain a certain level of control over the sound production, articulations, and dynamics developed from years of musical training. The cylindrical tube reacts differently than the saxophone body producing inharmonic sounds, overtones, and rich textures. 
Tommy has improvised with tubes in collaborative performances with [Wild Space Dance](https://www.youtube.com/watch?v=G0XABGUDFfA) in Brooklyn (2015), Ensemble AKA for [No Hay Banda](https://www.youtube.com/watch?v=9rotwgh_ZTE) (2017), and with Duo d’Entre-Deux for the co-improvised [Reverberant House](https://www.youtube.com/watch?v=Ho4u9VrFzlE) (2019) produced by Codes d’accès.

The simplicity of its design is appealing for us since it offers more liberty - as in less physical constraints<!-- [magnusson] --> - for augmenting it with electronics. We are now faced with this interesting questions; what happens when you *augment* an *infra* instrument..?

### Controller design
For our first prototype, we plan to model and 3D print the body of the controller. It'll have to be fixed to the acoustic instrument without hindrance to the performer. An emphasis will be put on the instrumentist preferences regarding some inherent qualities of sensors used for bimanual interactions. The use of human-centered design strategies has been proved to be an efficient way to facilitate the learningship of a new digital instrument (<a href="#sulli2021">Sullivan, 2021</a>). 
Custom electronics based on the esp8266 (WIFI enabled Arduino-like boards) will be interfacing the sensors and actuators to relay information between the musician and the musical agent. <!-- [image3Dmodel] -->


### Aknowledgment
The inspiration for this project stemmed from a collaboration for Tommy’s DMus recital performance planned for May 2021.<br>
We are currently awaiting the results for a CIRMMT students award and a Live@CIRMMT call for work.


## References

<a style="color:grey; text-align: left" name="nika2017">Nika, J., Déguernel, K., Chemla–Romeu-Santos, A., Vincent, E., & Assayag, G. (2017). <b>DYCI2 Agents: Merging the ”free”, ”reactive”, and ”scenario-Based” Music Generation Paradigms</b>. International Computer Music Conference.</a>

<a style="color:grey; text-align: left" name="csiks1990"> Csikszentmihalyi, M. (1990). <b>Flow: The psychology of optimal experience</b>. (Vol. 1990). New York: Harper & Row.</a>

<a style="color:grey; text-align: left" name="bow2005">Bowers, J., & Archer, P. (2005). <b>Not Hyper, Not Meta, Not Cyber but Infra-Instruments</b>. 5–10. https://www.nime.org/proceedings/2005/nime2005_005.pdf</a>

<a style="color:grey; text-align: left" name="sulli2018">Sullivan, J., Tibbitts, A., Gatinet, B., & Wanderley, M. M. M. (2018). <b>Gestural control of augmented instrumental performance: A case study of the concert harp</b>. Proceedings of the 5th International Conference on Movement and Computing, 1–8. https://doi.org/10.1145/3212721.3212814</a>

<a style="color:grey; text-align: left" name="sulli2021">Sullivan, J. (2021). <b>Built to perform: Designing digital musical instruments for professional use</b>. [Ph.D. thesis, McGill University]. https://johnnyvenom.com/files/sullivan_phd_thesis.pdf</a>

<a style="color:grey; text-align: left" name="corma2019">McCormack, J., Gifford, T., Hutchings, P., Llano, M., Yee-King, M., & dʼInverno, M. (2019). <b>In a Silent Way: Communication Between AI and Improvising Musicians Beyond Sound</b>. 1–11. <a href="https://doi.org/10.1145/3290605.3300268" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3290605.3300268</a></a>

---
title: "Etu{d,b}e"
excerpt: "Performance setup in collaboration with Tommy Davis and autonomous musical agents. <br/><img src='/images/tube.jpeg'>"
collection: portfolio
---
In collaboration with Tommy Davis, we propose improvised performances including autonomous musical agents and live instrumentists. We are using a combination of three frameworks from different composer-programmers. These agents’ behaviour is directed by various machine listening functions which may be summarized as: follow my step and follow that way. We are designing a modular environment to test various performative environments, explore contrasting human-machine groupings, and develop various machine listening and agency functions. We consider this exploration as a type of étude. As in the traditional use of the term in music pedagogy, our improvisations are presenting situations where the human and it's digital counterpart are studying (étudier) each other in realtime. The autonomous musical agents can even *learn* over the course of multiple performances by creating an offline memory bank. We'll assess whether this could improve the perceived quality of the human-machine interaction in this context.

<br><br>
### Performing DYCI2 framework during the North American Saxophone Alliance virtual conference
<iframe width="560" height="315" src="https://www.youtube.com/embed/oUbeL_lAhFU" title="DYCI2 improvisation" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br><br>

<div class="container">
    <video id="video" width="770" height="882" onclick="play();">
        <source src="video/Motion.mp4" type="video/mp4" />
    </video>
    <div class="overlay">
        <p>Content above your video</p>
        <form>
            <p>Content Below Your Video</p>
            <label for="input">Form Input Label</label>
            <input id="input" name="input" value="" />
            <button type="submit">Submit</button>
        </form>
    </div>
</div>

### Adapting Existing Framework
We are adapting these three existing autonomous environments to our specific performance situation:
* **DYCI2** by [Jérôme Nika](https://jeromenika.com/) (France)
* **_derivations** by [Ben Carey](https://bencarey.net/) (Australia)
* **CTIP2** by [Sergio Kafejian](https://musicabrasilis.com/composers/sergio-kafejian) (Brazil)

We are collaborating with each composer-programmer and have their permission to modify and perform the Max/MSP patches for this project. From simple pitch detection categorization to more complex live musical learning, the different improvisation environments offer autonomous capabilities in their own way. Two of them include audio effects that are modified either via agent input or manually. We already started customizing CTIP2 and DYCI2 for our explorations by adding or refining UI features to allow a better communication between a musician and it’s digital counterpart. We want to play with these tools and explore their minute functions and details; amazing things can occur when testing the limits of such systems.


Currently, the real-time performance controls over the agent are limited. In collaboration with IRCAM research team members, we will enable more intricate interaction with the machine. This implies a better control over multiple parameters and multimodal feedback related to the status and controls of the patch via visual indicators (screen or LED), to inform the instrumentist about the patch during an improvisation.

Once those controls over the musical agent are implemented with the graphical interface of Max/MSP or with computer input interface (keyboard, mouse, MIDI controller), we will start working on more complex scenarios. However, we think that in an ideal context, the performer should be able to interact directly with specific parameters of the musical agent.
Towards this goal, we will develop a digital interface fixed onto a saxophone, which will send data to the patch for further processing. The design of similar digital musical instruments (DMI) and various forms of meta- or augmented-instrument is not new and our work is directly inspired by the work done by researchers at IDMIL [EDU, JOHNNY] and elsewhere.
For a first prototype, we envision to model and 3D print the body of the controller. This would offer flexibility in terms of design and ease the development process. Custom electronics based around the esp8266 (WIFI enabled Arduino-like boards), or similar sensors, will be embedded in the model. We will explore uncommon inputs and multimodal feedback later in the process and based on our initial tests.

In addition to the saxophone, we will work with an unusual instrument: a tube with a saxophone mouthpiece attached. The tube was originally conceived with John Bower’s ‘infra-instrument’ concept in mind, that is, an instrument which is restricted in its expressivity, broken or only a portion of a standard instrument, and limited in virtuosic technique (Bowers, 2005). These infra-instruments, “precisely by virtue of their producing degenerate or simplistic tonalities, can work very well with live processing or computer-derived parts – more spectral-temporal latitude is available for augmentation” (Bowers, 2005). The plastic tube with a saxophone mouthpiece is a basic design which is appealing for our purposes since it offers more liberty for augmentation with electronics. It has a raw sound which is limited in many regards yet intriguing and demands creative solutions to develop suitable electronics. The saxophone mouthpiece allows the performer to maintain a high level of control over the sound production, articulations, and dynamics developed from years of musical training. The cylindrical tube reacts differently than the conical saxophone producing inharmonic sounds, overtones, and complex textures, thus it presents control challenges for saxophonists.

The inspiration for this project stemmed from a collaboration for Tommy’s DMus recital performance of the DYCI2 modules with saxophone planned for May 2021. In 2019, Vincent attended the performance Reverberant House, where Tommy improvised with tubes and saxophones alongside his Duo d’Entre-Deux. These two events were the impetus to create a project utilizing the tube, the DYCI2 modules, a custom interface, and improvisation. The project represents each collaborators expertise and interests equally. Vincent brings his expertise as programmer, instrument builder, interface designer, and réalisateur en informatique musical. Tommy will contribute his proficiency as improviser, performer of electronic and interactive music, and collaborator co-designer of the improvising modules.


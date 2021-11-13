import { UNIT_PARAGRAPHS, UNIT_SENTENCES } from "./constants";

const defaultParagraphLineCount = 5;

let loremChucksumArray: string[] = [
	'Chuck Norris doesn’t wear a watch. He decides what time it is.',
	'Chuck Norris can strangle you with a cordless phone.',
	'If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fought, they would both win.',
	'Chuck Norris can kill your imaginary friends.',
	'Chuck Norris can hear sign language.',
	'Chuck Norris tells Simon what to do.',
	'Chuck Norris makes onions cry',
	'Chuck Norris knows Victoria’s secret.',
	'Chuck Norris lost his virginity before his dad did.',
	'If it looks like chicken, tastes like chicken, and feels like chicken but Chuck Norris says its beef, then it’s beef.',
	'Chuck Norris’ tears cure cancer. Too bad he has never cried.',
	'Chuck Norris does not own a stove, oven, or microwave , because revenge is a dish best served cold.',
	'Chuck Norris has never blinked in his entire life. Never.',
	'Chuck Norris can speak Braille.',
	'Chuck Norris can slam revolving doors.',
	'The dark is afraid of Chuck Norris.',
	'Chuck Norris once had a heart attack. His heart lost.',
	'When Chuck Norris does a pushup, he’s pushing the Earth down.',
	'Chuck Norris doesn’t cheat death. He wins fair and square.',
	'Chuck Norris is the reason why Waldo is hiding.',
	'Chuck Norris can kill two stones with one bird.',
	'Chuck Norris sleeps with a pillow under his gun.',
	'Death once had a near-Chuck-Norris experience.',
	'M.C. Hammer learned the hard way that Chuck Norris can touch this.',
	'Chuck refers to himself in the fourth person.',
	'The only time Chuck Norris was ever wrong was when he thought he had made a mistake.',
	'When Chuck Norris was born he drove his mom home from the hospital.',
	'A bulletproof vest wears Chuck Norris for protection.',
	'Chuck Norris once won an underwater breathing contest. With a fish.',
	'Chuck Norris narrates Morgan Freeman’s life.',
	'The Great Wall of China was originally created to keep Chuck Norris out. It didn’t work.',
	'Chuck Norris destroyed the periodic table, because Chuck Norris only recognizes the element of surprise.',
	'It takes Chuck Norris 20 minutes to watch 60 Minutes.',
	'Chuck Norris once ordered a steak in a restaurant. The steak did what it was told.',
	'Bigfoot claims he once saw Chuck Norris.',
	'Chuck Norris can sit in the corner of a round room',
	'Chuck Norris can make a slinky go upstairs.',
	'Chuck Norris can squeeze orange juice out of a lemon.',
	'Chuck Norris can clap with one hand.',
	'Chuck Norris invented airplanes because he was tired of being the only person that could fly.',
	'Freddy Krueger has nightmares about Chuck Norris.',
	'Chuck Norris’ cowboy boots are made from real cowboys.',
	'Chuck Norris used to beat the shit out of his shadow because it was following to close. It now stands a safe 30 feet behind him.',
	'The flu gets a Chuck Norris shot every year.',
	'Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.',
	'Time waits for no man. Unless that man is Chuck Norris.',
	'If you spell Chuck Norris in Scrabble, you win. Forever.',
	'When God said, “Let there be light!” Chuck said, “Say Please.”',
	'Chuck Norris beats rock, paper, scissors. Cannon balls, tanks, super destroyers, exploding stars — I could go on.',
	'Chuck Norris threw a grenade and killed 50 people. Then it exploded.',
	'When Christopher Columbus discovered America, he was greeted by Chuck Norris.',
	'When we first landed on the moon, the astronauts noted there was print on the moon that said “Chuck Norris was here.”',
	'Chuck Norris plays Jenga with Stonehenge.',
	'Chuck Norris found the last digit of pi.',
	'What’s the strongest part of Chuck Norris? His opinion.',
	'On New Year’s Eve, Chuck Norris promised that he’d lose 20 pounds. The next morning he shaved his chest and smiled as he realized that he’d lost 30.',
	'Chuck Norris named his daughter Mercy. The day she was born was the only day Chuck Norris ever had Mercy.',
	'Chuck Norris once shattered the space-time continuum. He felt so bad, he put it back together.',
	'Mission Impossible was originally set in Chuck Norris’s house.',
	'Chuck Norris once ate at Taco Bell and didn’t get diarrhea.',
	'Chuck Norris has a mug of nails instead of coffee in the morning.',
	'Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light.',
	'Chuck Norris does not sleep. He waits.',
	'When Chuck Norris gives you the finger, he’s telling you how many seconds you have left to live.',
	'Chuck Norris drinks napalm to fight his heartburn.',
	'Chuck Norris can dribble a bowling ball.',
	'Chuck Norris does not use spell check. If he happens to misspell a word, Oxford will change the spelling.',
	'Chuck Norris counted to infinity… twice.',
	'Some kids pee their name in the snow. Chuck Norris can pee his name into concrete.',
	'Chuck Norris can have both feet on the ground and kick butt at the same time.',
	'When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.',
	'Chuck Norris can play the violin with a piano.',
	'When Chuck Norris writes, he makes paper bleed.',
	'Chuck Norris can divide by zero.'
];

export function getLoremChucksum(instructions: { count: number, units: string }): string {
	let loremChucksum: string = "";
	switch (instructions.units) {
		case UNIT_PARAGRAPHS:
			for (let i = 0; i < instructions.count; i++) {
				loremChucksum += getParagraph(defaultParagraphLineCount);
				if (i < instructions.count - 1) {
					loremChucksum += "\n\n";
				}
			}
			break;
		case UNIT_SENTENCES:
			loremChucksum += getParagraph(instructions.count);
			break;
		default:
			loremChucksum += getParagraph(1);
			break;
	}
	return loremChucksum.trim() + "\n";
}

function getParagraph(numberOfLines: number): string {
	let paragraph: string = "";
	let selectedLines = getRandomUniqueNumbers(numberOfLines, loremChucksumArray.length);
	for (let lineNumber of selectedLines) {
		paragraph += (loremChucksumArray[lineNumber]).trim();
		if (paragraph.endsWith(".")) {
			paragraph += " ";
		}else {
			paragraph += ". ";
		}
	}
	return paragraph.trim();
}

function getRandomUniqueNumbers(quantity: number, max: number): Set<number> {
	const set = new Set<number>();
	while(set.size < quantity) {
	  set.add(Math.floor(Math.random() * max));
	}
	return set;
}
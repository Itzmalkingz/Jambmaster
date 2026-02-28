// ==================== JAMB QUESTIONS DATABASE ====================
const questionsDB = {
    english: [
        {
            id: 1, difficulty: 'easy', text: 'Which of the following words is spelled correctly?',
            options: ['Occassion', 'Occasion', 'Ocasion', 'Occassion'], correct: 1,
            explanation: 'Occasion is the correct spelling. It means an important event or opportunity.'
        },
        {
            id: 2, difficulty: 'medium', text: 'Choose the word that best completes: "She showed great _____ in facing her problems."',
            options: ['Resilience', 'Resiliant', 'Resilent', 'Resilien'], correct: 0,
            explanation: 'Resilience (noun) means the ability to recover quickly from difficulties.'
        },
        {
            id: 3, difficulty: 'hard', text: 'Which sentence uses the correct form of "who" or "whom"?',
            options: ['Who did you give the book to?', 'Whom is going to the party?', 'Who is she talking about?', 'She does not know who to ask to.'],
            correct: 2, explanation: '"Who is she talking about?" is correct.'
        },
        {
            id: 4, difficulty: 'easy', text: 'What is the plural of "child"?',
            options: ['Childs', 'Children', 'Childes', 'Childer'], correct: 1,
            explanation: 'Children is the correct irregular plural form.'
        },
        {
            id: 5, difficulty: 'medium', text: 'Choose the sentence with correct grammar.',
            options: ['He have gone to school.', 'She have finished her work.', 'They has arrived late.', 'We have received your letter.'],
            correct: 3, explanation: '"We have received your letter" is grammatically correct.'
        },
        {
            id: 6, difficulty: 'easy', text: 'What is the antonym of "generous"?',
            options: ['Kind', 'Selfish', 'Caring', 'Thoughtful'], correct: 1,
            explanation: 'Selfish is the opposite of generous.'
        },
        {
            id: 7, difficulty: 'medium', text: 'Choose the correct use of the idiom "break the ice".',
            options: ['To literally break frozen water', 'To create a fun situation', 'To initiate conversation', 'To destroy something'], correct: 2,
            explanation: '"Break the ice" means to start a conversation or ease tension in a social situation.'
        },
        {
            id: 8, difficulty: 'hard', text: 'Which of these is an example of alliteration?',
            options: ['The cat sat on the mat', 'Peter Piper picked a peck of pickled peppers', 'She is happy today', 'The bird flew away'], correct: 1,
            explanation: 'Alliteration repeats initial consonant sounds. "Peter Piper picked" repeats the "P" sound.'
        },
        {
            id: 9, difficulty: 'medium', text: 'What does "benevolent" mean?',
            options: ['Harmful', 'Kind and helpful', 'Angry', 'Sad'], correct: 1,
            explanation: 'Benevolent means kind, generous, and helpful toward others.'
        },
        {
            id: 10, difficulty: 'hard', text: 'Identify the correct sentence.',
            options: ['Neither the boys nor the girl are coming.', 'Neither the boys nor the girl is coming.', 'Either the boys or the girl are coming.', 'Both A and C are correct.'],
            correct: 1, explanation: 'With "neither...nor" when the second subject is singular, use singular verb.'
        },
        {
            id: 11, difficulty: 'easy', text: 'What is the opposite of "silent"?',
            options: ['Quiet', 'Loud', 'Mute', 'Still'], correct: 1,
            explanation: '"Loud" is the opposite of silent.'
        },
        {
            id: 12, difficulty: 'medium', text: 'Which word best completes: "The _____ of the problem required immediate attention."',
            options: ['Severity', 'Serene', 'Serenity', 'Series'], correct: 0,
            explanation: 'Severity means the quality of being serious or severe.'
        },
        {
            id: 13, difficulty: 'hard', text: 'Choose the sentence with the most formal tone.',
            options: ['The boss said we gotta work harder.', 'The manager requested that we increase our productivity.', 'The boss wants us to work really hard.', 'We should probably work harder.'],
            correct: 1, explanation: 'Option B uses formal language suitable for professional communication.'
        },
        {
            id: 14, difficulty: 'easy', text: 'What is the synonym of "begin"?',
            options: ['Start', 'Finish', 'Continue', 'End'], correct: 0,
            explanation: 'Start is a synonym of begin.'
        },
        {
            id: 15, difficulty: 'medium', text: 'Complete: "If I had known, I _____ told you."',
            options: ['will have', 'would have', 'have', 'had'], correct: 1,
            explanation: '"Would have" is used in past conditional sentences.'
        },
        {
            id: 16, difficulty: 'hard', text: 'What literary device is used in "Time flies like an arrow"?',
            options: ['Alliteration', 'Metaphor', 'Simile', 'Personification'], correct: 2,
            explanation: 'It compares time to an arrow using "like".'
        },
        {
            id: 17, difficulty: 'easy', text: 'Which word is spelled correctly?',
            options: ['Recieve', 'Receive', 'Receve', 'Reciey'], correct: 1,
            explanation: 'Receive is spelled with "ei".'
        },
        {
            id: 18, difficulty: 'medium', text: 'What does "ambiguous" mean?',
            options: ['Clear', 'Having more than one meaning', 'Obvious', 'Simple'], correct: 1,
            explanation: 'Ambiguous means unclear or unclear because of having two possible meanings.'
        },
        {
            id: 19, difficulty: 'hard', text: 'Identify the active voice sentence.',
            options: ['The book was read by John.', 'John read the book.', 'The book was being read.', 'It was read by everyone.'],
            correct: 1, explanation: 'In "John read the book," the subject performs the action.'
        },
        {
            id: 20, difficulty: 'medium', text: 'What is the plural of "crisis"?',
            options: ['Crises', 'Crisises', 'Crisis', 'Crisees'], correct: 0,
            explanation: 'Crisis is a Greek word, so its plural is "crises".'
        }
    ],
    math: [
        {
            id: 1, difficulty: 'easy', text: 'What is 25 + 15?',
            options: ['30', '40', '50', '35'], correct: 1,
            explanation: '25 + 15 = 40'
        },
        {
            id: 2, difficulty: 'easy', text: 'What is 12 × 5?',
            options: ['50', '60', '70', '80'], correct: 1,
            explanation: '12 × 5 = 60'
        },
        {
            id: 3, difficulty: 'medium', text: 'Solve for x: 2x + 5 = 13',
            options: ['x = 2', 'x = 4', 'x = 6', 'x = 8'], correct: 1,
            explanation: '2x + 5 = 13 → 2x = 8 → x = 4'
        },
        {
            id: 4, difficulty: 'medium', text: 'What is the area of a rectangle with length 8 and width 5?',
            options: ['13', '26', '40', '45'], correct: 2,
            explanation: 'Area = length × width = 8 × 5 = 40'
        },
        {
            id: 5, difficulty: 'hard', text: 'If 3x² - 12 = 0, what is x?',
            options: ['x = ±1', 'x = ±2', 'x = ±3', 'x = ±4'], correct: 2,
            explanation: '3x² - 12 = 0 → x² = 4 → x = ±2'
        },
        {
            id: 6, difficulty: 'easy', text: 'What is 144 ÷ 12?',
            options: ['10', '12', '14', '16'], correct: 1,
            explanation: '144 ÷ 12 = 12'
        },
        {
            id: 7, difficulty: 'medium', text: 'What is the circumference of a circle with radius 7?',
            options: ['14π', '49π', '7π', '98π'], correct: 0,
            explanation: 'Circumference = 2πr = 2π(7) = 14π'
        },
        {
            id: 8, difficulty: 'hard', text: 'Solve: x² + 5x + 6 = 0',
            options: ['x = -2 or x = -3', 'x = 2 or x = 3', 'x = -1 or x = -6', 'x = 1 or x = 6'], correct: 0,
            explanation: 'Factoring: (x+2)(x+3) = 0, so x = -2 or x = -3'
        },
        {
            id: 9, difficulty: 'medium', text: 'What is 15% of 200?',
            options: ['20', '25', '30', '35'], correct: 2,
            explanation: '15% of 200 = 0.15 × 200 = 30'
        },
        {
            id: 10, difficulty: 'hard', text: 'If log₂ x = 3, what is x?',
            options: ['4', '6', '8', '9'], correct: 2,
            explanation: 'If log₂ x = 3, then 2³ = x, so x = 8'
        },
        {
            id: 11, difficulty: 'easy', text: 'What is 25 × 4?',
            options: ['80', '100', '90', '110'], correct: 1,
            explanation: '25 × 4 = 100'
        },
        {
            id: 12, difficulty: 'medium', text: 'What is the square root of 225?',
            options: ['12', '13', '15', '16'], correct: 2,
            explanation: '√225 = 15 because 15² = 225'
        },
        {
            id: 13, difficulty: 'hard', text: 'Solve: 5x² = 125',
            options: ['x = ±3', 'x = ±4', 'x = ±5', 'x = ±6'], correct: 2,
            explanation: 'x² = 25, so x = ±5'
        },
        {
            id: 14, difficulty: 'easy', text: 'What is 50 - 23?',
            options: ['25', '27', '29', '30'], correct: 1,
            explanation: '50 - 23 = 27'
        },
        {
            id: 15, difficulty: 'medium', text: 'What is 20% of 150?',
            options: ['20', '30', '40', '50'], correct: 1,
            explanation: '20% of 150 = 0.2 × 150 = 30'
        },
        {
            id: 16, difficulty: 'hard', text: 'If 2ˣ = 32, what is x?',
            options: ['3', '4', '5', '6'], correct: 2,
            explanation: '2⁵ = 32, so x = 5'
        },
        {
            id: 17, difficulty: 'easy', text: 'What is 7 × 8?',
            options: ['54', '56', '58', '60'], correct: 1,
            explanation: '7 × 8 = 56'
        },
        {
            id: 18, difficulty: 'medium', text: 'What is the area of a triangle with base 10 and height 6?',
            options: ['30', '40', '50', '60'], correct: 0,
            explanation: 'Area = ½ × base × height = ½ × 10 × 6 = 30'
        },
        {
            id: 19, difficulty: 'hard', text: 'What is the discriminant of x² - 4x + 3?',
            options: ['2', '4', '6', '8'], correct: 1,
            explanation: 'Discriminant = b² - 4ac = 16 - 12 = 4'
        },
        {
            id: 20, difficulty: 'medium', text: 'What is 3⁴?',
            options: ['64', '81', '100', '121'], correct: 1,
            explanation: '3⁴ = 3 × 3 × 3 × 3 = 81'
        }
    ],
    physics: [
        {
            id: 1, difficulty: 'easy', text: 'What is the SI unit of velocity?',
            options: ['m/s', 'km/h', 'ft/s', 'miles/h'], correct: 0,
            explanation: 'The SI unit of velocity is meters per second (m/s).'
        },
        {
            id: 2, difficulty: 'easy', text: 'What is the speed of light in vacuum?',
            options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁷ m/s'], correct: 0,
            explanation: 'The speed of light is approximately 3 × 10⁸ m/s.'
        },
        {
            id: 3, difficulty: 'medium', text: 'What does Ohm\'s law state?',
            options: ['V = I × R', 'V = I / R', 'V = I + R', 'V = I - R'], correct: 0,
            explanation: 'Ohm\'s law: V = I × R (voltage = current × resistance).'
        },
        {
            id: 4, difficulty: 'medium', text: 'The force F = ma is:',
            options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'], correct: 1,
            explanation: 'F = ma is Newton\'s Second Law of Motion.'
        },
        {
            id: 5, difficulty: 'hard', text: 'What is the relationship between frequency and wavelength?',
            options: ['c = f × λ', 'c = f / λ', 'c = f + λ', 'c = λ - f'], correct: 0,
            explanation: 'c = f × λ (speed = frequency × wavelength)'
        },
        {
            id: 6, difficulty: 'easy', text: 'What is the acceleration due to gravity on Earth?',
            options: ['9.8 m/s²', '10 m/s²', '15 m/s²', '20 m/s²'], correct: 0,
            explanation: 'The acceleration due to gravity is approximately 9.8 m/s².'
        },
        {
            id: 7, difficulty: 'medium', text: 'Which formula represents kinetic energy?',
            options: ['KE = mgh', 'KE = ½mv²', 'KE = Fd', 'KE = mg'], correct: 1,
            explanation: 'Kinetic energy is KE = ½mv² (half times mass times velocity squared).'
        },
        {
            id: 8, difficulty: 'hard', text: 'What is the principle of conservation of energy?',
            options: ['Energy can be created', 'Energy can be destroyed', 'Energy cannot be created or destroyed, only transformed', 'Energy increases over time'], correct: 2,
            explanation: 'Energy cannot be created or destroyed, only converted from one form to another.'
        },
        {
            id: 9, difficulty: 'medium', text: 'What is the SI unit of power?',
            options: ['Joule', 'Newton', 'Watt', 'Volt'], correct: 2,
            explanation: 'The SI unit of power is the Watt (W), which equals Joules per second.'
        },
        {
            id: 10, difficulty: 'hard', text: 'What is the formula for gravitational potential energy?',
            options: ['PE = mgh', 'PE = ½mv²', 'PE = Fd', 'PE = mg/h'], correct: 0,
            explanation: 'Gravitational potential energy is PE = mgh (mass × gravity × height).'
        },
        {
            id: 11, difficulty: 'easy', text: 'What is the SI unit of force?',
            options: ['Pascal', 'Joule', 'Newton', 'Watt'], correct: 2,
            explanation: 'Newton (N) is the SI unit of force.'
        },
        {
            id: 12, difficulty: 'medium', text: 'What is the relationship between distance and time in uniform motion?',
            options: ['Linear', 'Quadratic', 'Cubic', 'Exponential'], correct: 0,
            explanation: 'In uniform motion, distance is directly proportional to time.'
        },
        {
            id: 13, difficulty: 'hard', text: 'What is the second law of thermodynamics?',
            options: ['Energy is conserved', 'Entropy increases', 'Temperature is constant', 'Heat flows upward'], correct: 1,
            explanation: 'The second law states that entropy of an isolated system always increases.'
        },
        {
            id: 14, difficulty: 'easy', text: 'What is the formula for momentum?',
            options: ['p = F/m', 'p = m/v', 'p = mv', 'p = m+v'], correct: 2,
            explanation: 'Momentum = mass × velocity'
        },
        {
            id: 15, difficulty: 'medium', text: 'What is the SI unit of pressure?',
            options: ['Newton', 'Pascal', 'Joule', 'Watt'], correct: 1,
            explanation: 'Pascal (Pa) is the SI unit of pressure.'
        },
        {
            id: 16, difficulty: 'hard', text: 'What is Faraday\'s law of electromagnetic induction?',
            options: ['F = qE', 'EMF = -dΦ/dt', 'V = IR', 'P = F/A'], correct: 1,
            explanation: 'Faraday\'s law: EMF = -dΦ/dt (induced EMF equals negative rate of change of flux)'
        },
        {
            id: 17, difficulty: 'easy', text: 'What is the focal length of a plane mirror?',
            options: ['0', 'Infinity', '1 unit', '10 units'], correct: 1,
            explanation: 'Plane mirrors have infinite focal length.'
        },
        {
            id: 18, difficulty: 'medium', text: 'What is the angle of incidence when angle of reflection is 30°?',
            options: ['15°', '30°', '60°', '90°'], correct: 1,
            explanation: 'Angle of incidence = Angle of reflection = 30°'
        },
        {
            id: 19, difficulty: 'hard', text: 'What is Young\'s modulus?',
            options: ['Stress × strain', 'Stress / strain', 'Strain / stress', 'Stress + strain'], correct: 1,
            explanation: 'Young\'s modulus = Stress / Strain'
        },
        {
            id: 20, difficulty: 'medium', text: 'What is the SI unit of electric field?',
            options: ['Volt', 'Newton/Coulomb', 'Joule/Coulomb', 'Both B and C'], correct: 3,
            explanation: 'Electric field can be measured in N/C or V/m (they are equivalent).'
        }
    ],
    chemistry: [
        {
            id: 1, difficulty: 'easy', text: 'What is the atomic number of Carbon?',
            options: ['4', '6', '8', '12'], correct: 1,
            explanation: 'Carbon has atomic number 6 (6 protons).'
        },
        {
            id: 2, difficulty: 'easy', text: 'What is the chemical formula for table salt?',
            options: ['NaCl', 'Na₂Cl', 'NaCl₂', 'Na₂Cl₂'], correct: 0,
            explanation: 'The chemical formula for table salt is NaCl.'
        },
        {
            id: 3, difficulty: 'medium', text: 'How many hydrogen atoms are in H₂SO₄?',
            options: ['2', '3', '4', '6'], correct: 0,
            explanation: 'H₂SO₄ contains 2 hydrogen atoms.'
        },
        {
            id: 4, difficulty: 'medium', text: 'What is the pH of a neutral solution?',
            options: ['5', '7', '9', '12'], correct: 1,
            explanation: 'A neutral solution has pH 7 at 25°C.'
        },
        {
            id: 5, difficulty: 'hard', text: 'Which is a strong electrolyte?',
            options: ['Acetic acid', 'Hydrochloric acid', 'Ammonia solution', 'Sugar solution'], correct: 1,
            explanation: 'Hydrochloric acid (HCl) is a strong electrolyte.'
        },
        {
            id: 6, difficulty: 'easy', text: 'What is the formula for water?',
            options: ['H₂O', 'HO₂', 'H₃O', 'O₂H'], correct: 0,
            explanation: 'Water is H₂O (two hydrogen atoms and one oxygen atom).'
        },
        {
            id: 7, difficulty: 'medium', text: 'What is the valence of Oxygen in most compounds?',
            options: ['1', '2', '3', '4'], correct: 1,
            explanation: 'Oxygen typically has a valence of 2 in most compounds.'
        },
        {
            id: 8, difficulty: 'hard', text: 'What is the formula for calcium carbonate?',
            options: ['CaCO₂', 'CaCO₃', 'Ca₂CO₃', 'CaC₂O₃'], correct: 1,
            explanation: 'Calcium carbonate is CaCO₃, found in chalk and limestone.'
        },
        {
            id: 9, difficulty: 'medium', text: 'Which gas is produced when an acid reacts with a metal?',
            options: ['Oxygen', 'Chlorine', 'Hydrogen', 'Nitrogen'], correct: 2,
            explanation: 'Hydrogen gas is typically produced when acids react with metals.'
        },
        {
            id: 10, difficulty: 'hard', text: 'What are isotopes?',
            options: ['Atoms with different numbers of electrons', 'Atoms with different numbers of protons', 'Atoms with different numbers of neutrons', 'Atoms with different masses only'], correct: 2,
            explanation: 'Isotopes are atoms of the same element with different numbers of neutrons.'
        },
        {
            id: 11, difficulty: 'easy', text: 'What is the molar mass of CO₂?',
            options: ['28 g/mol', '44 g/mol', '32 g/mol', '60 g/mol'], correct: 1,
            explanation: 'CO₂: 12 + 16 + 16 = 44 g/mol'
        },
        {
            id: 12, difficulty: 'medium', text: 'What is the electron configuration of Sodium (Na)?',
            options: ['2, 8, 1', '2, 7, 2', '2, 8, 2', '2, 6, 2'], correct: 0,
            explanation: 'Na has atomic number 11: 2, 8, 1'
        },
        {
            id: 13, difficulty: 'hard', text: 'What is the oxidation state of sulfur in H₂SO₄?',
            options: ['+2', '+4', '+6', '-2'], correct: 2,
            explanation: 'In H₂SO₄, sulfur has an oxidation state of +6'
        },
        {
            id: 14, difficulty: 'easy', text: 'What is the chemical formula for calcium hydroxide?',
            options: ['Ca(OH)₂', 'CaOH', 'Ca(OH)', 'Ca₂OH'], correct: 0,
            explanation: 'Calcium hydroxide is Ca(OH)₂'
        },
        {
            id: 15, difficulty: 'medium', text: 'How many electrons are in a chloride ion (Cl⁻)?',
            options: ['16', '17', '18', '19'], correct: 2,
            explanation: 'Cl (17) + 1 electron = 18 electrons'
        },
        {
            id: 16, difficulty: 'hard', text: 'What is the name of CH₃CH₂OH?',
            options: ['Methanol', 'Ethanol', 'Propanol', 'Butanol'], correct: 1,
            explanation: 'CH₃CH₂OH is ethanol (ethyl alcohol)'
        },
        {
            id: 17, difficulty: 'easy', text: 'In a neutralization reaction, acid + base produces...',
            options: ['Acid and water', 'Salt and water', 'Base and gas', 'Only salt'], correct: 1,
            explanation: 'Acid + Base → Salt + Water'
        },
        {
            id: 18, difficulty: 'medium', text: 'What is the boiling point of water at standard pressure?',
            options: ['90°C', '100°C', '110°C', '120°C'], correct: 1,
            explanation: 'Water boils at 100°C (373K) at 1 atm pressure'
        },
        {
            id: 19, difficulty: 'hard', text: 'What is Le Chatelier\'s principle?',
            options: ['All reactions go to completion', 'Systems respond to counteract stress', 'Pressure has no effect', 'Temperature is constant'], correct: 1,
            explanation: 'When stress is applied to a system at equilibrium, it shifts to counteract the stress.'
        },
        {
            id: 20, difficulty: 'medium', text: 'What is the mass of 1 mole of oxygen gas (O₂)?',
            options: ['8 g', '16 g', '32 g', '64 g'], correct: 2,
            explanation: 'Molar mass of O₂ = 16 × 2 = 32 g/mol'
        }
    ],
    biology: [
        {
            id: 1, difficulty: 'easy', text: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'], correct: 1,
            explanation: 'The mitochondria is the powerhouse of the cell.'
        },
        {
            id: 2, difficulty: 'easy', text: 'How many chambers does the human heart have?',
            options: ['2', '3', '4', '5'], correct: 2,
            explanation: 'The human heart has 4 chambers: 2 atria and 2 ventricles.'
        },
        {
            id: 3, difficulty: 'medium', text: 'What process do plants use to make food?',
            options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'], correct: 1,
            explanation: 'Photosynthesis converts light energy into chemical energy.'
        },
        {
            id: 4, difficulty: 'medium', text: 'What is the basic unit of heredity?',
            options: ['DNA', 'Protein', 'Gene', 'Chromosome'], correct: 2,
            explanation: 'A gene is the basic unit of heredity.'
        },
        {
            id: 5, difficulty: 'hard', text: 'Which is a density-dependent factor?',
            options: ['Temperature', 'Rainfall', 'Competition', 'Tornado'], correct: 2,
            explanation: 'Competition is a density-dependent factor affecting population.'
        },
        {
            id: 6, difficulty: 'easy', text: 'What do red blood cells carry?',
            options: ['Carbon dioxide', 'Oxygen', 'Waste products', 'Hormones'], correct: 1,
            explanation: 'Red blood cells carry oxygen throughout the body.'
        },
        {
            id: 7, difficulty: 'medium', text: 'What is the function of the kidney?',
            options: ['Digest food', 'Filter waste from blood', 'Regulate breathing', 'Store energy'], correct: 1,
            explanation: 'Kidneys filter waste products and excess water from the blood.'
        },
        {
            id: 8, difficulty: 'hard', text: 'What does DNA stand for?',
            options: ['Deoxyribonucleic acid', 'Diribonucleic acid', 'Dinucleic acid', 'Diribose nuclease'], correct: 0,
            explanation: 'DNA stands for Deoxyribonucleic acid.'
        },
        {
            id: 9, difficulty: 'medium', text: 'Which organelle is responsible for protein synthesis?',
            options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Vacuole'], correct: 2,
            explanation: 'Ribosomes are the site of protein synthesis.'
        },
        {
            id: 10, difficulty: 'hard', text: 'What are the products of photosynthesis?',
            options: ['Glucose and oxygen', 'Carbon dioxide and water', 'Glucose and carbon dioxide', 'Oxygen and water'], correct: 0,
            explanation: 'Photosynthesis produces glucose (sugar) and oxygen from water and carbon dioxide.'
        },
        {
            id: 11, difficulty: 'easy', text: 'How many pairs of chromosomes do humans have?',
            options: ['22', '23', '46', '48'], correct: 1,
            explanation: 'Humans have 23 pairs (46 total) of chromosomes'
        },
        {
            id: 12, difficulty: 'medium', text: 'What is the function of chloroplast?',
            options: ['Protein synthesis', 'Photosynthesis', 'Respiration', 'Waste storage'], correct: 1,
            explanation: 'Chloroplasts are the site of photosynthesis in plants'
        },
        {
            id: 13, difficulty: 'hard', text: 'What is the name of the enzyme that digests proteins?',
            options: ['Amylase', 'Protease', 'Lipase', 'Lactase'], correct: 1,
            explanation: 'Protease is an enzyme that breaks down proteins'
        },
        {
            id: 14, difficulty: 'easy', text: 'What is the main function of white blood cells?',
            options: ['Transport oxygen', 'Fight infections', 'Clot blood', 'Carry nutrients'], correct: 1,
            explanation: 'White blood cells help the immune system fight infections'
        },
        {
            id: 15, difficulty: 'medium', text: 'In which part of the flower is pollen produced?',
            options: ['Pistil', 'Sepal', 'Anther', 'Petal'], correct: 2,
            explanation: 'Pollen is produced in the anther (male part of flower)'
        },
        {
            id: 16, difficulty: 'hard', text: 'What is the process of water uptake by roots called?',
            options: ['Transpiration', 'Osmosis', 'Diffusion', 'Photolysis'], correct: 1,
            explanation: 'Osmosis is the movement of water across a semipermeable membrane'
        },
        {
            id: 17, difficulty: 'easy', text: 'What do plants release during photosynthesis?',
            options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], correct: 2,
            explanation: 'Plants release oxygen as a byproduct of photosynthesis'
        },
        {
            id: 18, difficulty: 'medium', text: 'What type of blood vessel carries blood away from the heart?',
            options: ['Vein', 'Artery', 'Capillary', 'Vessel'], correct: 1,
            explanation: 'Arteries carry blood away from the heart'
        },
        {
            id: 19, difficulty: 'hard', text: 'What is the gel-like substance inside the nucleus called?',
            options: ['Protoplasm', 'Nucleoplasm', 'Chromatin', 'Cytoplasm'], correct: 1,
            explanation: 'Nucleoplasm is the gel-like substance inside the nucleus'
        },
        {
            id: 20, difficulty: 'medium', text: 'What is the name of the protein in red blood cells that carries oxygen?',
            options: ['Hemoglobin', 'Myoglobin', 'Chlorophyll', 'Keratin'], correct: 0,
            explanation: 'Hemoglobin is the protein that carries oxygen in red blood cells'
        }
    ]
};

// Function to fetch JSON file
async function fetchJSONFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON file: ${filePath}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching JSON file: ${filePath}`, error);
        throw error;
    }
}

// Function to perform the initial search
function search() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    const searchRedirects = [
        { keywords: ['valmiki ramayana', 'valmiki ramayan', 'balakanda', 'ayodhya kanda', 'aranya kanda', 'kishkindha kanda', 'sundara kanda', 'yudhha kanda', 'uttara kanda', 'valmikiramayana', 'valmikiramayan', 'bala kanda', 'ayodhyakanda', 'aranyakanda', 'kishkindhakanda', 'sundarakanda', 'yudhhakanda', 'uttarakanda'], redirect: 'kandaList.html' },
        { keywords: ['Mahabharata', 'Mahabharat', 'Adi Parva', 'AdiParva', 'Sabha Parva', 'Vana Parva', 'Virata Parva', 'Udyoga Parva', 'Bhishma Parva', 'Drona Parva', 'Karna Parva', 'Shalya Parva', 'Sauptika Parva', 'Stri Parva', 'Shanti Parva', 'Anushasana Parva', 'Ashvamedhika Parva', 'Ashramavasika Parva', 'Mausala Parva', 'Mahaprasthanika Parva', 'Swargarohanika Parva'], redirect: 'ParvaList.html' },
        { keywords: ['AdhyatmaRamayanaBook', 'AdhyatmaRamayana', 'Adhyatma Ramayana', 'Adhyatma Ramayan', 'AdhyatmaRamayan'], redirect: 'AdhyatmaRamayanaBook.html' },
        { keywords: ['Ramayana', 'Ramayan'], redirect: 'ramayana_difftable.html' },
        { keywords: ['AdbhutRamayanBook', 'AdbhutRamayan', 'Adbhut Ramayana', 'AdbhutRamayana', 'Adbhuta Ramayan', 'AdbhutaRamayana', 'AdbhutaRamayan', 'Adbhuta Ramayan'], redirect: 'AdbhutRamayanBook.html' },
        { keywords: ['ArjunaVishadaYoga', 'SankhyaYoga', 'KarmaYoga', 'GyanaKarmaSanyasaYoga', 'KarmaSanyasaYoga', 'AtmaSamyamaYoga', 'GyanaVigyanaYoga', 'AksharaBrahmaYoga', 'RajaVidyaRajaGuhyaYoga', 'VibhutiYoga', 'VishwarupaDarsanaYoga', 'BhaktiYoga', 'KsetraKsetrajnaVibhagaYoga', 'GunatrayaVibhagaYoga', 'PurushottamaYoga', 'DaivasuraSampadVibhagaYoga', 'ShraddhaTrayaVibhagaYoga', 'MokshaSanyasaYoga', 'SrimadBhagvadGita', 'BhagvadGita', 'Srimad Bhagvad Gita', 'Bhagavad Gita', 'Srimad Bhagavad Gita', 'SrimadBhagavadGita', 'Iswara Gita', 'Ananta Gita', 'Hari Gita', 'Vyasa Gita'], redirect: 'SrimadBhagvadGita.html' },
        { keywords: ['purana', 'puranas', 'puran', 'Agni Purana', 'Bhagavata Purana', 'Bhavishya Purana', 'Brahma Purana', 'Brahmaanda Purana', 'Brahmavaivarta Purana', 'Garuda Purana', 'Kurma Purana', 'Linga Purana', 'Markandeya Purana', 'Matsya Purana', 'Narada Purana', 'Padma Purana', 'Shiva Purana', 'Skanda Purana', 'Vamana Purana', 'Varaha Purana', 'Vayu Purana', 'Vishnu Purana'], redirect: 'Puranas.html' },
        { keywords: ['Atharvaveda', 'Samaveda', 'Yajurveda', 'Rigveda', 'Atharva veda', 'Sama veda', 'Yajur veda', 'Rig veda', 'vedas', 'veda'], redirect: 'Vedas.html' }
    ];

    for (const redirect of searchRedirects) {
        if (isValidKeywords(searchInput, redirect.keywords)) {
            window.location.href = `${redirect.redirect}?q=${encodeURIComponent(searchInput)}`;
            return;
        }
    }

    // Display a message for invalid keywords
    displayInvalidKeywords();
}

// Function to check if entered keywords are valid
function isValidKeywords(input, validKeywords) {
    // Convert input to lowercase for case-insensitivity
    const lowercaseInput = input.toLowerCase();

    // Check if any part of the valid keywords is included in the input
    return validKeywords.some(keyword => lowercaseInput.includes(keyword.toLowerCase()));
}

// Function to display a message for invalid keywords
function displayInvalidKeywords() {
    // Display the error message in an alert
    alert('Invalid keywords entered. Please enter valid keywords.');
}

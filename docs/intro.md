# Sample Habits Guide for Content Editors

This document provides guidelines and sample data for creating habit templates for the Examine application. Each habit consists of specific fields that help users understand, implement, and track their habits effectively.

## Habit Model Structure

A habit consists of the following key components:

1. **Basic Information**: General details about the habit
2. **Evidence & Impact**: Scientific backing and health benefits
3. **Tracking Configuration**: How users track progress with this habit
4. **Implementation Guidance**: Tips and best practices for users
5. **Statistics & Metrics**: Usage and success data (mostly calculated automatically)

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Unique identifier for the habit |
| `name` | String | Short, clear name of the habit (e.g., "Meditation") |
| `category` | String | General category (e.g., "Mental Wellness", "Physical Activity", "Diet") |
| `shortDescription` | String | Brief one-sentence overview for display in lists |
| `detailedDescription` | String | In-depth explanation (1-3 paragraphs) |
| `evidenceBasedSummary` | String | Summary of scientific evidence (1-2 paragraphs) |
| `evidenceSourceUrl` | String | URL to evidence source (examine.com article) |
| `pros` | String[] | List of benefits from adopting this habit |
| `cons` | String[] | List of potential drawbacks or challenges |
| `healthImpact` | String | Specific health area impacted (e.g., "Cognitive Function") |
| `implementationTips` | String[] | Actionable advice for starting the habit |
| `trackerType` | String | How this habit is tracked: "completion", "range", or "count" |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `evidenceSourceTitle` | String | User-friendly title for the evidence source |
| `range` | Object | Configuration for range-based habits (min, max, step, unit) |
| `targetCount` | Number | Target number for count-based habits (default: 1) |
| `relaxedTracking` | Boolean | Whether the habit allows for relaxing/pausing (default: true) |
| `requiresSupplements` | Boolean | Whether this habit involves supplements (default: false) |
| `supplementNames` | String[] | Names of supplements involved with this habit |
| `relatedSupplements` | String[] | Any supplements that complement this habit |
| `iconUrl` | String | URL for a small icon representing the habit |
| `bannerImageUrl` | String | URL for a larger banner image |
| `tags` | String[] | Keywords for searching and filtering |
| `frequency` | String | How often the habit should be performed (daily, weekly, etc.) |
| `iconName` | String | Icon name for display in the app |
| `recommendedDaysToFormHabit` | Number | Recommended days to form this habit (default: 21) |

## Sample Habits

Below are several sample habits across different categories. Each habit demonstrates proper formatting and level of detail expected.

### Sample 1: Daily Meditation

```json
{
  "id": "meditation-daily",
  "name": "Daily Meditation",
  "category": "Mental Wellness",
  "shortDescription": "Practice mindfulness meditation for at least 10 minutes daily.",
  "detailedDescription": "Daily meditation involves setting aside time each day to sit quietly and focus on your breath, bodily sensations, or a specific mantra. This practice has been shown to reduce stress, improve concentration, and promote emotional regulation. Even short sessions of 10-15 minutes can provide significant benefits when practiced consistently.",
  "evidenceBasedSummary": "Multiple randomized controlled trials have demonstrated that regular meditation practice can reduce stress hormones like cortisol, improve attention span, and potentially reduce symptoms of anxiety and depression. A 2014 meta-analysis found that mindfulness meditation programs showed moderate evidence of improved anxiety, depression, and pain.",
  "evidenceSourceUrl": "https://examine.com/supplements/meditation/",
  "evidenceSourceTitle": "Meditation - Scientific Research Overview",
  "pros": [
    "Reduces stress and anxiety",
    "Improves focus and concentration",
    "Enhances self-awareness",
    "Promotes emotional health",
    "Can be practiced anywhere with no equipment"
  ],
  "cons": [
    "Requires consistent practice for benefits",
    "Can be challenging to maintain focus initially",
    "Finding time in a busy schedule may be difficult"
  ],
  "healthImpact": "Mental Health",
  "implementationTips": [
    "Start with just 5 minutes per day and gradually increase",
    "Use a guided meditation app for beginners",
    "Try meditating at the same time each day to build routine",
    "Find a quiet space where you won't be disturbed",
    "Don't judge yourself when your mind wanders - simply return to your focus"
  ],
  "trackerType": "completion",
  "relaxedTracking": true,
  "iconName": "meditation",
  "tags": ["mindfulness", "stress-reduction", "mental-health", "relaxation"],
  "frequency": "daily",
  "recommendedDaysToFormHabit": 30
}
```

### Sample 2: Daily Step Count

```json
{
  "id": "step-count-10k",
  "name": "10,000 Steps Daily",
  "category": "Physical Activity",
  "shortDescription": "Walk at least 10,000 steps each day to improve cardiovascular health.",
  "detailedDescription": "Walking 10,000 steps per day (approximately 5 miles) is a common fitness goal that promotes cardiovascular health, helps maintain weight, and improves overall physical wellbeing. While the specific number 10,000 originated from a Japanese marketing campaign, research supports that increasing daily step count does provide significant health benefits, with diminishing returns after about 7,500 steps.",
  "evidenceBasedSummary": "Research has shown that increasing daily step count correlates with reduced mortality risk. A 2020 study in JAMA found that walking 8,000 steps per day was associated with a 51% lower risk of all-cause mortality compared with 4,000 steps per day. While 10,000 steps has become a popular target, health benefits begin to accrue at lower levels and continue to increase up to about 7,500-8,000 steps per day.",
  "evidenceSourceUrl": "https://examine.com/topics/step-count/",
  "evidenceSourceTitle": "Daily Step Count and Health Outcomes",
  "pros": [
    "Improves cardiovascular health",
    "Helps maintain healthy weight",
    "Low impact exercise suitable for most people",
    "Requires no special equipment beyond a step counter",
    "Can be incorporated into daily routine"
  ],
  "cons": [
    "Time required to reach 10,000 steps (approximately 1.5-2 hours of walking)",
    "May be challenging for those with mobility issues",
    "Weather and environment can limit outdoor walking"
  ],
  "healthImpact": "Cardiovascular Health",
  "implementationTips": [
    "Use a pedometer or smartphone app to track steps automatically",
    "Take the stairs instead of elevators when possible",
    "Park farther from entrances to add steps",
    "Schedule short walking breaks during the workday",
    "Consider a standing desk or walking meetings",
    "Start with a lower goal (like 6,000 steps) and gradually increase"
  ],
  "trackerType": "count",
  "targetCount": 10000,
  "relaxedTracking": true,
  "iconName": "directions_walk",
  "tags": ["walking", "cardio", "fitness", "physical-activity"],
  "frequency": "daily",
  "recommendedDaysToFormHabit": 21
}
```

### Sample 3: Hydration Tracking

```json
{
  "id": "water-intake",
  "name": "Optimal Hydration",
  "category": "Diet",
  "shortDescription": "Drink at least 2 liters (8 cups) of water throughout the day.",
  "detailedDescription": "Maintaining proper hydration is essential for overall health. Water is required for numerous bodily functions including regulating temperature, removing waste, and lubricating joints. While individual needs vary based on factors like activity level, climate, and body size, a general recommendation is to consume at least 2 liters (approximately 8 cups) of water daily from beverages and water-rich foods.",
  "evidenceBasedSummary": "While the '8 glasses a day' rule lacks direct scientific backing, research indicates proper hydration improves cognitive function, physical performance, and helps prevent kidney stones. The Institute of Medicine suggests adequate intake for men is about 3.7 liters (125 oz) and for women about 2.7 liters (91 oz) of total water from all beverages and food. Water requirements increase with physical activity, hot environments, during illness, and in pregnancy or breastfeeding.",
  "evidenceSourceUrl": "https://examine.com/supplements/water/",
  "evidenceSourceTitle": "Water Intake and Health Outcomes",
  "pros": [
    "Helps maintain energy levels and brain function",
    "May aid weight management by increasing satiety",
    "Supports kidney function and waste elimination",
    "Improves skin appearance and hydration",
    "Free and readily available in most locations"
  ],
  "cons": [
    "Requires frequent bathroom breaks",
    "May be difficult to track exact consumption",
    "Some people dislike the taste of plain water"
  ],
  "healthImpact": "General Health",
  "implementationTips": [
    "Carry a reusable water bottle throughout the day",
    "Set reminders to drink at regular intervals",
    "Add fruit slices or herbs to enhance flavor naturally",
    "Drink a glass of water before each meal",
    "Use a marked water bottle to track consumption easily",
    "Eat water-rich fruits and vegetables to supplement intake"
  ],
  "trackerType": "range",
  "range": {
    "min": 0,
    "max": 4000,
    "step": 100,
    "unit": "ml"
  },
  "relaxedTracking": true,
  "iconName": "local_drink",
  "tags": ["hydration", "water", "drinking", "health-basics"],
  "frequency": "daily",
  "recommendedDaysToFormHabit": 14
}
```

### Sample 4: Weekly Strength Training

```json
{
  "id": "strength-training",
  "name": "Strength Training",
  "category": "Physical Activity",
  "shortDescription": "Perform strength training exercises 2-3 times per week.",
  "detailedDescription": "Strength training (resistance training) involves exercises that improve muscle strength and endurance by making muscles work against a weight or force. This can include free weights, weight machines, resistance bands, or bodyweight exercises. Regular strength training helps build and maintain muscle mass, strengthen bones, manage weight, enhance energy levels, and prevent injuries.",
  "evidenceBasedSummary": "Research consistently shows strength training improves muscle strength, size, and function across all age groups. The American College of Sports Medicine recommends adults perform strength training for all major muscle groups 2-3 times weekly. Studies indicate strength training may reduce risk of osteoporosis, improve glucose metabolism, enhance cardiovascular health, improve body composition, and extend functional independence in older adults.",
  "evidenceSourceUrl": "https://examine.com/supplements/resistance-training/",
  "evidenceSourceTitle": "Resistance Training - Evidence Analysis",
  "pros": [
    "Increases muscle mass and strength",
    "Improves bone density and reduces osteoporosis risk",
    "Enhances metabolic rate and assists with weight management",
    "Improves functional abilities and reduces injury risk",
    "Beneficial for mental health and cognitive function"
  ],
  "cons": [
    "Risk of injury if performed with improper form",
    "May require access to equipment or gym membership",
    "Initial muscle soreness can be uncomfortable",
    "Requires learning proper techniques"
  ],
  "healthImpact": "Musculoskeletal Health",
  "implementationTips": [
    "Start with bodyweight exercises if you're a beginner",
    "Consider working with a trainer to learn proper form",
    "Begin with lighter weights and gradually increase",
    "Aim to work all major muscle groups",
    "Allow 48 hours between sessions for muscle recovery",
    "Combine with proper nutrition for optimal results"
  ],
  "trackerType": "completion",
  "relaxedTracking": true,
  "iconName": "fitness_center",
  "tags": ["exercise", "resistance-training", "muscle", "fitness"],
  "frequency": "weekly",
  "targetDaysPerPeriod": 3,
  "recommendedDaysToFormHabit": 42
}
```

## Tracking Types Explained

### Completion Tracking
For habits that are either completed or not completed on a given day. Use for habits like "Take vitamins" or "Meditate for 10 minutes."

Fields to focus on:
- `trackerType`: Set to "completion"
- In app tracking: Users simply mark as completed/not completed

### Count Tracking
For habits that require tracking a specific number. Use for habits like "Drink 8 glasses of water" or "Walk 10,000 steps."

Fields to focus on:
- `trackerType`: Set to "count"
- `targetCount`: The goal number (e.g., 10000 for steps)
- In app tracking: Users enter an actual number

### Range Tracking
For habits that track a value within a range. Use for habits like "Sleep 7-9 hours" or "Maintain heart rate at 130-150 BPM during exercise."

Fields to focus on:
- `trackerType`: Set to "range"
- `range`: Object with properties:
  - `min`: Minimum acceptable value
  - `max`: Maximum acceptable value
  - `step`: Increment size for input
  - `unit`: Unit of measurement (e.g., "hours", "BPM")
- In app tracking: Users select or enter a value within the specified range

## Important Notes for Content Editors

1. **Evidence Quality**:
   - Always provide accurate, evidence-based information
   - Link to relevant Examine.com articles when possible
   - Use peer-reviewed research to inform recommendations

2. **Writing Style**:
   - Keep language simple and accessible
   - Avoid technical jargon unless necessary
   - Be encouraging and motivational rather than prescriptive

3. **Implementation Tips**:
   - Include 4-6 practical, actionable tips
   - Focus on reducing barriers to adoption
   - Consider beginners and those with limited resources

4. **Tracker Type Selection**:
   - Choose the most appropriate tracker type for each habit
   - Consider user experience and ease of tracking

5. **Habit Entry Structure**:
   When users track habits, the system creates HabitEntry records with these key fields:
   - `completed`: Boolean indicating completion (used for completion-type)
   - `count`: Number value (used for count-type)
   - `rangeValue`: Floating point value (used for range-type)
   
   Ensure your habit design accounts for the appropriate tracking method.

Please submit new habit templates in JSON format following these examples. All required fields must be completed, and optional fields should be included where relevant.

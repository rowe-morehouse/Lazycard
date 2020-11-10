import { IDatabase } from './Database';

const demo = (): IDatabase => {
    const now = new Date(Date.now()).toISOString();

    return {
        version: "1.1.0",
        topics: [{id: 1, name: "Recovery Flashcards"}],
        cards: [
            {
                id: 1,
                front: "My recovery Mantra",
                back: "I accept that things are not always going to go my way, but I try to change what I can change, and live as elegantly as possible with what I cannot.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 2,
                front: "How you respond?",
                back: "I accept the situation, and I respond with elegance.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 3,
                front: "Definition of Elegance",
                back: "The quality of being graceful in manner, being pleasingly and simple, neat, and ingenious.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 4,
                front: "Definition of Humility",
                back: "Having a clear perspective and respect for one's place in context. A recognition of self in relation to the universe. Acceptance of my own defects.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 5,
                front: "PSBTWITTSB",
                back: "People should behave the way I think they should behave.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 6,
                front: "FOF",
                back: "Fallacy of Fairness",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 7,
                front: "URB",
                back: "Unconditionally accept, Realistic expectation, Better way to look at it",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 8,
                front: "DDD",
                back: "Delay, Distract, Decide",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 9,
                front: "DEADS",
                back: "Delay, Escape, Avoid, Distract, Substitution",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 10,
                front: "RGRC",
                back: "Remember Goals, Remember Consequences",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 11,
                front: "ASHS",
                back: "Adversity, Self-Talk, Hurt, Substitution",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 12,
                front: "SERA",
                back: "Self-talk, Emotions, Response, Alternative",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 13,
                front: "ABCDE",
                back: "Adversity, Beliefs, Consequences, Disputes, Effective New Thought and Behaviors",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 14,
                front: "TICES",
                back: "Target = Image, Cognition, Emotions, Sensations",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 15,
                front: "Definition of Adicction: ABCDE",
                back: "Inability to ABSTAIN, impairment of BEHAVIOR, CRAVINGS, DIMINISHED recognition of negative consequences, disfunctional EMOTIONAL response.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 16,
                front: "Definition of Recovery: PHUC MCMA CPR",
                back: "Recovery is a process of healing the underlying conditions that perpetuate addictive behaviors. It is the regular practice of managing cravings in order to maintain abstinence from mood altering substances. Recovery is also about inhabiting the conditions of the present reality, whether pleasant or unpleasant.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 17,
                front: "The Definition of Relapse: PIP B2U DKWBH",
                back: "Relapses is a progressive, internal process that eventually leads the dependent person back to active chemical use, despite her knowledge that such use will be harmful.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 18,
                front: "Addiction results in: AAAD",
                back: "Altered impulse control, altered judgment, cumulative adverse consequences experienced from dysfunctional pursuit of of substance use.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            },
            {
                id: 19,
                front: "The Basis of Recovery: RMWF",
                back: "Renunciation, Meditation, Written Investigation, Finding Community.",
                dueDate: now,
                dueDays: 0,
                attempts: 0,
                successes: 0,
                topicId: 1
            }
        ]
    }
}

export default demo;

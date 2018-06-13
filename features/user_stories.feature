Feature: Should I cycle to work?

    As a cycle commuter
    I want to know the weather conditions along my route to work
    So that I know whether it is a good day to cycle

        # home: 51.222, -56.2222
        # work: 50.12, -45.222
    Scenario: Add a route
        Given I have no configured routes
        When I supply the following route data of my commute
            | place | x    | y    |
            | start | 51.2 | 34.3 |
            | end   | 51.9 | 35.7 |
        Then my route is saved

    Scenario: Add commuting times
        Given I have pre-configured a route
        When I supply the following times of my commute
            | place | leave time | arrive time | 
            |start  | 08:00      | 09:00       | 
            | end   | 17:00      | 17:45       |
        Then my route has associated commute times

        # what's the weather along my route like today?




    # As a cycle commuter who tries to cycle a couple of days a week
    # I want to know the best days in the week to cycle to work
    # So that I have the best rides

    # As a cycle commuter that doesn't mind the rain
    # I want to customise my preferences
    # So that rainy days are still good cycle days

    # As a forgetful cycle commuter
    # I would like a notification the evening before
    # To suggest I might like to cycle tomorrow

    # As a cycle commuter
    # I would like to be offered alternative routes in heavy traffic conditions
    # So that I get to work on time

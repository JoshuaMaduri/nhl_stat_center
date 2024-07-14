import requests
from requests.exceptions import HTTPError

def fetch_player_data(player_id):
    url = f"https://api-web.nhle.com/v1/player/{player_id}/landing"
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        
        if response.status_code == 200:
            player_data = response.json()
            return player_data
    except HTTPError as http_err:
        print(f"HTTP error occurred for player ID {player_id}: {http_err}")
    except Exception as err:
        print(f"Error occurred for player ID {player_id}: {err}")
    
    return None

def fetch_players_in_range(start_id, end_id):
    players_data = []
    
    for player_id in range(start_id, end_id + 1):
        player_data = fetch_player_data(player_id)
        if player_data:
            players_data.append(player_data)
    
    return players_data

# Example usage
start_id = 8440000
end_id = 8500000
all_players = fetch_players_in_range(start_id, end_id)

# Print all players (example: printing player names)
for player in all_players:
    print(f"Player ID: {player['id']}, Name: {player['fullName']}, Position: {player['positionCode']}")

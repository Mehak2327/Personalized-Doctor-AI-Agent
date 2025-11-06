import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

def find_disease_medicine_patterns(transactions, min_support=0.2, min_confidence=0.5):
    """
    transactions: list of lists where each sublist contains diseases/medicines a patient had.
    Example: [["Flu", "Paracetamol"], ["Allergy", "Cetrizine"], ["Flu", "Cough Syrup"]]
    """

    try:
        # Convert transactions into one-hot encoded DataFrame
        unique_items = sorted(set(item for sublist in transactions for item in sublist))
        encoded_data = []
        for trans in transactions:
            encoded_data.append({item: (item in trans) for item in unique_items})
        df = pd.DataFrame(encoded_data)

        # Generate frequent itemsets
        frequent_itemsets = apriori(df, min_support=min_support, use_colnames=True)

        # Generate association rules
        rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=min_confidence)

        # Convert frozensets to lists
        frequent_itemsets["itemsets"] = frequent_itemsets["itemsets"].apply(lambda x: list(x))
        rules["antecedents"] = rules["antecedents"].apply(lambda x: list(x))
        rules["consequents"] = rules["consequents"].apply(lambda x: list(x))

        # Select key columns
        rules = rules[["antecedents", "consequents", "support", "confidence", "lift"]]

        return {
            "frequent_itemsets": frequent_itemsets.to_dict(orient="records"),
            "association_rules": rules.to_dict(orient="records"),
            "model_used": "Apriori Algorithm"
        }

    except Exception as e:
        return {"error": str(e)}

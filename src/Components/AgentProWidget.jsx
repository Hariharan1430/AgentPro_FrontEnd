import { useEffect } from "react";

function AgentProWidget({ student }) {
  useEffect(() => {
    let script;

    const loadWidget = async () => {
      try {
        // Load widget only once
        if (!window.AgentProWidget) {
          window.AgentProConfig = {
            apiKey:
              "cbp_ad4d1230de9c1b21116f849949a90fc00a65bc126b5251b7cf3888924078becf",
            apiUrl: "https://agentpro.chat",
          };

          script = document.createElement("script");
          script.src = "https://agentpro.chat/widget.js";
          script.async = true;

          document.body.appendChild(script);

          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }

        // Fetch verified visitor from your backend
        const response = await fetch(
          `https://agentpronew.onrender.com/agentpro/visitor?studentid=${student.studentId}`
        );

        const result = await response.json();

        if (!result.success) {
          console.error(result.message);
          return;
        }

        // Set verified visitor
        window.AgentProWidget.setVisitor({
          userId: result.data.userId,
          name: result.data.name,
          email: result.data.email,
          signature: result.data.signature,
        });
      } catch (error) {
        console.error("AgentPro Error:", error);
      }
    };

    if (student) {
      loadWidget();
    }

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [student]);

  return null;
}

export default AgentProWidget;
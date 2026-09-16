import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Register")
public class RegisterServletApp extends HttpServlet {
	
	public RegisterServletApp() {
		System.out.println("Servlet obj is created by the web container internally.");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String user = request.getParameter("uname");
		String city = request.getParameter("ucity");
		
		response.sendRedirect("/FirstRedirectFromServletToJSP/success.jsp");
		
	}

}

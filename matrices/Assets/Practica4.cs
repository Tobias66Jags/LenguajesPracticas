using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Practica4 : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        //Random r = new Random();

        Matriz2x2 m = new Matriz2x2(Random.value * 100,
                                    Random.value * 100,
                                    Random.value * 100,
                                    Random.value * 100);
        Matriz2x2 n = new Matriz2x2(Random.value * 100,
                                    Random.value * 100,
                                    Random.value * 100,
                                    Random.value * 100);
        Debug.Log("m:");
        Debug.Log(m);
        Debug.Log("n:");
        Debug.Log(n);

        Debug.Log("m + n:");
        Debug.Log(m.Suma(n));
        Debug.Log("m * n:");
       Debug.Log(m.Multiplica(n));
       
      double x =  Random.value * 20;
        Debug.Log("m * " + x + ":\n");
        Debug.Log(m.Multiplica(x));
        Debug.Log("det(m): " +
                          m.Determinante() + " \n");
     
        Matriz2x2 i = m.Inversa();
        Debug.Log("m⁻¹:");
        if (i == null) {
            Debug.Log("La matriz m no tiene inversa.");
        } else {
            Debug.Log(i);
            Matriz2x2 id = m.Multiplica(i);
            Debug.Log("m * m⁻¹:");
            Debug.Log(id);
        }
      
        int p = 1 + Mathf.RoundToInt(Random.value * 10);
        Debug.Log("mⁿ (n = " + p + "):\n");
        Debug.Log(m.Potencia(p));
    }

}
